import { useCookies } from 'react-cookie'
import pkg from '../../package.json'

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
