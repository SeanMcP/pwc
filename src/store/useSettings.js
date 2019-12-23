import React from 'react'
import useLocalStorage from 'store/useLocalStorage'
import { initialValues } from 'schemas/settings'

const initialState = {
    ...initialValues,
    mode: 'light', // Aspirational
}

export default function useSettings() {
    const [state, setState] = useLocalStorage('settings', initialState)

    function setValue(key, value) {
        const shallow = { ...state }
        shallow[key] = value
        setState(shallow)
    }

    function setAll(changes) {
        setState({
            ...state,
            ...changes,
        })
        alert('Settings saved')
    }

    const { mode } = state

    React.useEffect(() => {
        if (mode) document.body.dataset.mode = mode
    }, [mode])

    return [state, { setValue, setAll }]
}
