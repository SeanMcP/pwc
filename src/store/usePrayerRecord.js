import React from 'react'
import useCookie from './useCookie'

function usePrayerRecordHook() {
    const [state, setState] = useCookie('prayers', 0)

    function increment() {
        setState(parseInt(state) + 1)
    }

    return [state, increment]
}

const PrayerRecordContext = React.createContext()

export function PrayerRecordProvider({ children }) {
    return (
        <PrayerRecordContext.Provider value={usePrayerRecordHook()}>
            {children}
        </PrayerRecordContext.Provider>
    )
}

export default function usePrayerRecord() {
    const context = React.useContext(PrayerRecordContext)
    if (!context)
        throw Error(
            'Cannot call `usePrayerRecord()` outside of `PrayerRecordProvider`'
        )
    return context
}
