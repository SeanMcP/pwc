import { useCookies } from 'react-cookie'
import {
    buildKeyFromType,
    buildKeyFromVersionAndType,
} from 'utils/dataUtils.js'
import PREVIOUS_VERSIONS from 'data/previousVersions'

function todayAtMidnight() {
    // Manufactures a timestampt for today at 11:59:59:999pm.
    return new Date().setHours(23, 59, 59, 999)
}

const type = 'record'

export const storeKey = buildKeyFromType(type)

export const options = {
    // Fyi: `todayAtMidnight()` returns milliseconds, but `useCookies`
    // is expecting a date, hence the wrapping.
    expires: new Date(todayAtMidnight()),
    // Assign this cookie to all paths
    path: '/',
}

export default function usePrayerRecord() {
    const [cookies, setCookie, removeCookie] = useCookies([storeKey])
    const value = parseInt(cookies[storeKey])

    if (isNaN(value)) {
        let foundValue
        for (const version of PREVIOUS_VERSIONS) {
            const previousKey = buildKeyFromVersionAndType(version, type)
            const oldValue = parseInt(cookies[previousKey])
            if (!isNaN(oldValue)) {
                foundValue = oldValue
                // Clean up
                removeCookie(previousKey)
                break
            }
        }
        setCookie(storeKey, foundValue || 0, options)
    }

    function increment() {
        // This variable seemed necessary, but I can't explain why.
        // Try removing this later if you have some time to tinker.
        const newValue = (value || 0) + 1
        setCookie(storeKey, newValue, options)
    }

    return [value, increment]
}
