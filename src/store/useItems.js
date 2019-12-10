import React from 'react'
import uuid from 'uuid/v4'
import dayjs from 'dayjs'
import useLocalStorage from 'store/useLocalStorage'
import usePrayerRecord from './usePrayerRecord'

const initialState = {}

function wasToday(dateString) {
    if (!dateString) return false

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
        day,
        favorite = false,
        month,
        notes = '',
        prayerRecord = [],
        tags = [],
        type,
    }) {
        const id = uuid()
        const shallow = { ...state }

        let date = null
        if (day && month) {
            date = dayjs()
                .month(month)
                .date(day)
        }

        shallow[id] = {
            name,
            date,
            favorite,
            notes,
            prayerRecord,
            tags,
            type,
        }
        setState(shallow)
    }

    function areItems() {
        return Object.keys(state).length > 0
    }

    function edit(id, { day, month, ...updates }) {
        const shallow = { ...state }
        if (day && month) {
            updates.date = dayjs()
                .month(month)
                .date(day)
        }
        shallow[id] = {
            ...shallow[id],
            ...updates,
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
        shallow[id].prayerRecord = [dayjs(), ...shallow[id].prayerRecord]
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

    function getRecommendations({ prayerCount, settings }) {
        const { includeFavorites, recommendationCount } = settings
        const length = recommendationCount - prayerCount || 0
        let count = 0
        const toBeSorted = []

        const recommendations = {
            dates: [],
            favorites: [],
            lastPrayed: [],
        }

        for (const id in state) {
            const item = state[id]

            // If the item was last prayed for today, then it shouldn't be in any list
            if (wasToday(item.prayerRecord[0])) continue

            // Special dates have first priority...
            if (isTodaysDate(item.date)) {
                recommendations.dates.push(id)
                count++
                continue
            }

            // Favorited items has second...
            if (item.favorite) {
                recommendations.favorites.push(id)
                if (includeFavorites === 'true') count++
                continue
            }

            // ...and everything else gets added to a queue
            toBeSorted.push(id)
        }

        // If recommendation count is less than the provided length, then sort.
        if (count < length && toBeSorted.length > 0) {
            recommendations.lastPrayed = toBeSorted
                .sort((a, b) => {
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
                .slice(0, length - count)
        }

        return recommendations
    }

    const output = [
        state,
        {
            add,
            areItems,
            edit,
            get,
            getRecommendations,
            recordPrayer,
            remove,
            toggleFavorite,
        },
    ]

    function ___DEV___setDateToToday(id) {
        const shallow = { ...state }
        shallow[id].date = dayjs()
        setState(shallow)
    }

    function ___DEV___populateList() {
        const ITEMS = require('constants/items')
        const types = Object.keys(ITEMS)
        const items = {}
        let favorite = false
        for (let i = 0; i < 24; i++) {
            items[uuid()] = {
                date: null,
                favorite,
                name: `Test-${i}`,
                notes: `- Notes for Test-${i}`,
                prayerRecord: [],
                tags: [],
                type: types[Math.floor(Math.random() * types.length)],
            }
            if (i % 3 === 0) favorite = !favorite
        }
        setState({ ...state, ...items })
    }

    if (process.env.NODE_ENV === 'development') {
        output.push({
            ___DEV___setDateToToday,
            ___DEV___populateList,
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
