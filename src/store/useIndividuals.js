import React from 'react'
import uuid from 'uuid/v4'
import dayjs from 'dayjs'
import useLocalStorage from 'store/useLocalStorage'

const initialState = {}

function wasToday(dateString) {
    return dayjs().isSame(dayjs(dateString), 'day')
}

function isYourBirthday(birthDateString) {
    const today = dayjs()
    const birthday = dayjs(birthDateString)
    return today.isSame(birthday, 'month') && today.isSame(birthday, 'day')
}

function useIndividualsHook() {
    const [state, setState] = useLocalStorage('individuals', initialState)

    function add({
        name,
        birthday,
        favorite = false,
        notes = '',
        tags = [],
        lastPrayed = new Date()
    }) {
        const id = uuid()
        const shallow = { ...state }
        shallow[id] = {
            name,
            birthday: new Date(birthday),
            favorite,
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

    function toggleFavorite(id) {
        const shallow = { ...state }
        shallow[id].favorite = !shallow[id].favorite
        setState(shallow)
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

    function getBirthdays() {
        const birthdays = []
        for (const id in state) {
            const { birthday, lastPrayed } = state[id]
            if (isYourBirthday(birthday) && !wasToday(lastPrayed))
                birthdays.push(id)
        }
        return birthdays
    }

    function getFavorites() {
        const favorites = []
        for (const id in state) {
            const { lastPrayed, favorite } = state[id]
            // Favorited and today's date is not the same as the last prayed date
            if (favorite && !wasToday(lastPrayed)) favorites.push(id)
        }
        return favorites
    }

    function getLastPrayed(length) {
        const ids = Object.keys(state).filter(
            id => !wasToday(state[id].lastPrayed)
        )
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

    function getRecommendations(length) {
        // I don't love all this looping. Find a better way.
        const birthdays = getBirthdays()
        const favorites = getFavorites().filter(id => !birthdays.includes(id))
        const lastPrayed = getLastPrayed(length).filter(
            id => !birthdays.includes(id) && !favorites.includes(id)
        )
        return {
            birthdays,
            favorites,
            lastPrayed
        }
    }

    function ___DEV___setBirthday(id) {
        const shallow = { ...state }
        shallow[id].birthday = new Date()
        setState(shallow)
    }

    const output = [
        state,
        {
            add,
            edit,
            get,
            getRecommendations,
            recordPrayer,
            remove,
            toggleFavorite
        }
    ]

    if (process.env.NODE_ENV === 'development') {
        output.push({
            ___DEV___setBirthday
        })
    }

    return output
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
