import React from 'react'
import './App.css'
import useLocalStorage from './useLocalStorage'
import Recommendations from './Recommendations'

function App() {
    const [
        state,
        { addNeighbor, findLastPrayed, findTodaysBirthdays }
    ] = useLocalStorage()
    function handleSubmit(event) {
        const form = event.target
        event.preventDefault()
        const formData = new FormData(form)
        const name = formData.get('name')
        if (name) {
            addNeighbor(name)
            form.reset()
        }
    }
    return (
        <div className="App">
            <code>{JSON.stringify(state, null, 2)}</code>pwc
            <code>{JSON.stringify(findTodaysBirthdays(), null, 2)}</code>
            <form onSubmit={handleSubmit}>
                <label htmlFor="neighbor-input">Neighbor</label>
                <input id="neighbor-input" name="name" type="text" />
                <button>Add</button>
            </form>
            <Recommendations />
        </div>
    )
}

export default App
