import React from 'react'
import package from '../../package.json'

function getCookie(name, initialValue, durationInHours) {
    const valueFromCookie = JSON.parse(browser.cookies.get(name))
    if (!valueFromCookie) {
        setCookie(name, initialValue, durationInHours)
        return initialValue
    }
    return valueFromCookie
}

function setCookie(name, valueToStore, durationInHours) {
    browser.cookies.set({
        name,
        value: JSON.stringify(valueToStore),
        expirationDate: new Date().getTime() + durationInHours * 60 * 60 * 1000
    })
}

export default function useCookie(name, initialValue, durationInHours = 12) {
    const cookieName = `${package.name}@${package.version}-${name}`
    const [state, setState] = React.useState(
        getCookie(cookieName, initialValue, durationInHours)
    )

    React.useEffect(() => {
        setCookie(cookieName, state, durationInHours)
    }, [state])

    return [state, setState]
}
