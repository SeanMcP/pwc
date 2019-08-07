import React from 'react'
import { name, version } from '../package.json'

const initialState = {
    neighbors: {}
}

const id = `${name}@${version}`

function getLocalStorage() {
    const valueFromStorage = JSON.parse(localStorage.getItem(id))
    if (!valueFromStorage) {
        localStorage.setItem(id, initialState)
        return initialState
    }
    return valueFromStorage
}

function setLocalStorage(valueToStore) {
    localStorage.setItem(id, JSON.stringify(valueToStore))
}

export default function useLocalStorage() {
    const [state, setState] = React.useState(getLocalStorage)
    React.useEffect(() => {
        setLocalStorage(state)
    }, [state])
    function addNeighbor(name, birthday, notes) {
        const shallow = { ...state }
        shallow.neighbors[name] = {
            name,
            birthday,
            notes
        }
        setState(shallow)
    }
    return [state, setState, { addNeighbor }]
}
