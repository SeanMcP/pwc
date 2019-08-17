import React from 'react'
import uuid from 'uuid/v4'
import useLocalStorage from 'store/useLocalStorage'
import { getMonthAndDate } from 'utils'

const initialState = {}

function useIndividualsHook() {
    const [state, setState] = useLocalStorage('individuals', initialState)

    function add({
        name,
        birthday,
        notes = '',
        tags = [],
        lastPrayed = new Date()
    }) {
        const id = uuid()
        const shallow = { ...state }
        shallow[id] = {
            name,
            birthday: new Date(birthday),
            notes,
            tags,
            lastPrayed
        }
        setState(shallow)
    }

    function edit(id, updates) {
        const shallow = { ...state }
        shallow[id] = {
            ...shallow[id],
            ...updates
        }
        setState(shallow)
    }

    function get(id) {
        return state[id]
    }

    function recordPrayer(id) {
        const shallow = { ...state }
        shallow[id].lastPrayed = new Date()
        setState(shallow)
    }

    function remove(id) {
        if (state.hasOwnProperty(id)) {
            const shallow = { ...state }
            delete shallow[id]
            setState(shallow)
        }
    }

    function findTodaysBirthdays() {
        const [todaysMonth, todaysDate] = getMonthAndDate(new Date())
        const birthdays = []
        for (const id in state) {
            const neighbor = state[id]
            const [month, date] = getMonthAndDate(neighbor.birthday)
            if (month === todaysMonth && date === todaysDate) birthdays.push(id)
        }
        return birthdays
    }

    function findLastPrayed(length) {
        const ids = Object.keys(state)
        const sorted = ids.sort((a, b) => {
            const aTime = new Date(state[a].lastPrayed).getTime()
            const bTime = new Date(state[b].lastPrayed).getTime()
            if (aTime < bTime) {
                return -1
            } else if (aTime > bTime) {
                return +1
            } else {
                return 0
            }
        })
        return length ? sorted.slice(0, length) : sorted
    }

    function getPrayerRecommendations(length) {
        const birthdays = findTodaysBirthdays()
        return {
            birthdays,
            // I don't love looping three times here, but I don't know
            // of a better way
            lastPrayed: findLastPrayed(length - birthdays.length).filter(
                id => !birthdays.includes(id)
            )
        }
    }

    return [
        state,
        {
            add,
            edit,
            get,
            getPrayerRecommendations,
            recordPrayer,
            remove
        }
    ]
}

const IndividualsContext = React.createContext()

export function IndividualsProvider({ children }) {
    return (
        <IndividualsContext.Provider value={useIndividualsHook()}>
            {children}
        </IndividualsContext.Provider>
    )
}

export function useIndividuals() {
    const context = React.useContext(IndividualsContext)
    if (!context)
        throw Error(
            'Cannot call `useIndividuals()` outside of `IndividualProvider`'
        )
    return context
}
