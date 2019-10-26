import React from 'react'
import uuid from 'uuid/v4'
import dayjs from 'dayjs'
import useLocalStorage from 'store/useLocalStorage'
import usePrayerRecord from './usePrayerRecord'

const initialState = {}

function wasToday(dateString) {
    return dayjs().isSame(dayjs(dateString), 'day')
}

function isTodaysDate(dateString) {
    const today = dayjs()
    const date = dayjs(dateString)
    return today.isSame(date, 'month') && today.isSame(date, 'day')
}

function useItemsHook() {
    const [, addPrayer] = usePrayerRecord()
    const [state, setState] = useLocalStorage('items', initialState)

    function add({
        name,
        date,
        dateType,
        favorite = false,
        notes = '',
        prayerRecord = [],
        tags = [],
        type
    }) {
        const id = uuid()
        const shallow = { ...state }
        shallow[id] = {
            name,
            date: new Date(date),
            dateType,
            favorite,
            notes,
            prayerRecord,
            tags,
            type
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
        shallow[id].prayerRecord = [new Date(), ...shallow[id].prayerRecord]
        setState(shallow)
        addPrayer()
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
            const { birthday, prayerRecord } = state[id]
            if (isTodaysDate(birthday) && !wasToday(prayerRecord[0]))
                birthdays.push(id)
        }
        return birthdays
    }

    function getFavorites() {
        const favorites = []
        for (const id in state) {
            const { prayerRecord, favorite } = state[id]
            // Favorited and today's date is not the same as the last prayed date
            if (favorite && !wasToday(prayerRecord[0])) favorites.push(id)
        }
        return favorites
    }

    function getLastPrayed(length) {
        const ids = Object.keys(state).filter(
            id => !wasToday(state[id].prayerRecord[0])
        )
        const sorted = ids.sort((a, b) => {
            const aTime = new Date(state[a].prayerRecord[0]).getTime()
            const bTime = new Date(state[b].prayerRecord[0]).getTime()
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

    function ___DEV___setDateToToday(id) {
        const shallow = { ...state }
        shallow[id].date = new Date()
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
            ___DEV___setDateToToday
        })
    }

    return output
}

const ItemsContext = React.createContext()

export function ItemsProvider({ children }) {
    return (
        <ItemsContext.Provider value={useItemsHook()}>
            {children}
        </ItemsContext.Provider>
    )
}

export function useItems() {
    const context = React.useContext(ItemsContext)
    if (!context)
        throw Error('Cannot call `useItems()` outside of `ItemsProvider`')
    return context
}
