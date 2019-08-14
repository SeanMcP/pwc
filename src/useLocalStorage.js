import React from 'react'
import uuid from 'uuid/v4'
import { name, version } from '../package.json'

const initialState = {}

const storageId = `${name}@${version}-neighbors`

function getLocalStorage() {
    const valueFromStorage = JSON.parse(localStorage.getItem(storageId))
    if (!valueFromStorage) {
        localStorage.setItem(storageId, initialState)
        return initialState
    }
    return valueFromStorage
}

function setLocalStorage(valueToStore) {
    localStorage.setItem(storageId, JSON.stringify(valueToStore))
}

function useLocalStorageHook() {
    const [state, setState] = React.useState(getLocalStorage)
    React.useEffect(() => {
        setLocalStorage(state)
    }, [state])

    function addNeighbor({
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

    function getNeighbor(id) {
        return state[id]
    }

    function deleteNeighbor(id) {
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
                return +1
            } else if (aTime > bTime) {
                return -1
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
            addNeighbor,
            deleteNeighbor,
            findLastPrayed,
            findTodaysBirthdays,
            getNeighbor,
            getPrayerRecommendations
        }
    ]
}

function getMonthAndDate(date) {
    const parsed = new Date(date)
    return parsed ? [parsed.getMonth(), parsed.getDate()] : []
}

const LocalStorageContext = React.createContext()

export function LocalStorageProvider({ children }) {
    return (
        <LocalStorageContext.Provider value={useLocalStorageHook()}>
            {children}
        </LocalStorageContext.Provider>
    )
}

export function useLocalStorage() {
    const context = React.useContext(LocalStorageContext)
    if (!context)
        throw Error(
            'Called `useLocalStorage()` outside of LocalStorageProvider'
        )
    return context
}
