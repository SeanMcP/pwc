import useLocalStorage from 'store/useLocalStorage'

const initialState = {
    recommendationCount: 3,
    mode: 'light' // Aspirational
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
            ...changes
        })
        alert('Settings saved')
    }

    return [state, { setValue, setAll }]
}
