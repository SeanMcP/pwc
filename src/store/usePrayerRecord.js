import { useCookies } from 'react-cookie'
import pkg from '../../package.json'

function todayAtMidnight() {
    // Manufactures a timestampt for today at 11:59:59:999pm.
    return new Date().setHours(23, 59, 59, 999)
}

const name = `${pkg.name}@${pkg.version}-record`

const options = {
    // Fyi: `todayAtMidnight()` returns milliseconds, but `useCookies`
    // is expecting a date, hence the wrapping.
    expires: new Date(todayAtMidnight()),
    // Assign this cookie to all paths
    path: '/',
}

export default function usePrayerRecord() {
    const [cookies, setCookie] = useCookies([name])
    const value = parseInt(cookies[name])

    if (isNaN(value)) setCookie(name, 0, options)

    function increment() {
        // This variable seemed necessary, but I can't explain why.
        // Try removing this later if you have some time to tinker.
        const newValue = value + 1
        setCookie(name, newValue, options)
    }

    return [value, increment]
}
