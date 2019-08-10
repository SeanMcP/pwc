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

export default function useLocalStorage() {
    const [state, setState] = React.useState(getLocalStorage)
    React.useEffect(() => {
        setLocalStorage(state)
    }, [state])

    function addNeighbor(
        name,
        birthday = null,
        notes = '',
        tags = [],
        lastPrayed = null
    ) {
        const id = uuid()
        const shallow = { ...state }
        shallow[id] = {
            name,
            birthday,
            notes,
            tags,
            lastPrayed
        }
        setState(shallow)
    }

    function getNeighbor(id) {
        return state[id]
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

    return [state, { addNeighbor, findTodaysBirthdays, getNeighbor }]
}

function getMonthAndDate(date) {
    const parsed = new Date(date)
    return parsed ? [parsed.getMonth(), parsed.getDate()] : []
}
