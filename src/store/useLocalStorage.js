import React from 'react'
import { name, version } from '../../package.json'

function getLocalStorage(storeKey, initialState) {
    const valueFromStorage = JSON.parse(localStorage.getItem(storeKey))
    if (!valueFromStorage) {
        setLocalStorage(storeKey, initialState)
        return initialState
    }
    return valueFromStorage
}

function setLocalStorage(storeKey, valueToStore) {
    localStorage.setItem(storeKey, JSON.stringify(valueToStore))
}

export default function useLocalStorage(key, initialState) {
    const storeKey = `${name}@${version}-${key}`
    const [state, setState] = React.useState(
        getLocalStorage(storeKey, initialState)
    )
    React.useEffect(() => {
        setLocalStorage(storeKey, state)
    }, [state, storeKey])
    return [state, setState]
}
