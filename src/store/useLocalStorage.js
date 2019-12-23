import React from 'react'
import {
    buildKeyFromType,
    buildKeyFromVersionAndType,
} from 'utils/dataUtils.js'
import PREVIOUS_VERSIONS from 'data/previousVersions'

function getLocalStorage(storeKey, initialState, type) {
    const valueFromStorage = JSON.parse(localStorage.getItem(storeKey))
    if (!valueFromStorage) {
        for (const version of PREVIOUS_VERSIONS) {
            const previousKey = buildKeyFromVersionAndType(version, type)
            const oldValue = JSON.parse(localStorage.getItem(previousKey))
            if (oldValue) {
                // Use the old value
                setLocalStorage(storeKey, oldValue)
                // Clean up
                localStorage.removeItem(previousKey)
                return oldValue
            }
        }
        setLocalStorage(storeKey, initialState)
        return initialState
    }
    return valueFromStorage
}

function setLocalStorage(storeKey, valueToStore) {
    localStorage.setItem(storeKey, JSON.stringify(valueToStore))
}

export default function useLocalStorage(type, initialState) {
    const storeKey = buildKeyFromType(type)
    const [state, setState] = React.useState(
        getLocalStorage(storeKey, initialState, type)
    )
    React.useEffect(() => {
        setLocalStorage(storeKey, state)
    }, [state, storeKey])
    return [state, setState]
}
