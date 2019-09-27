// import React from 'react'
import { useCookies } from 'react-cookie'
import pkg from '../../package.json'
// import useCookie from './useCookie'
// import useCookie from './useCookie'

// function usePrayerRecordHook() {
//     const [state, setState] = useCookie('prayers', 0)

//     function increment() {
//         setState(parseInt(state) + 1)
//     }

//     return [state, increment]
// }

// const PrayerRecordContext = React.createContext()

// export function PrayerRecordProvider({ children }) {
//     return (
//         <PrayerRecordContext.Provider value={usePrayerRecordHook()}>
//             {children}
//         </PrayerRecordContext.Provider>
//     )
// }

// export default function usePrayerRecord() {
//     const context = React.useContext(PrayerRecordContext)
//     if (!context)
//         throw Error(
//             'Cannot call `usePrayerRecord()` outside of `PrayerRecordProvider`'
//         )
//     return context
// }

export default function usePrayerRecord() {
    const name = `${pkg.name}@${pkg.version}-record`
    const options = {
        expires: new Date(new Date().getTime() + +12 * 60 * 60 * 1000)
    }

    const [cookies, setCookie] = useCookies([name])
    const value = parseInt(cookies[name])

    if (isNaN(value)) setCookie(name, 0, options)

    function increment() {
        setCookie(name, value + 1, options)
    }

    return [value, increment]
}
