import React from 'react'
import './App.css'
import useLocalStorage from './useLocalStorage'
import Recommendations from './Recommendations'

function App() {
    const [state, { addNeighbor, getPrayerRecommendations }] = useLocalStorage()
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="neighbor-input">Neighbor</label>
                <input id="neighbor-input" name="name" type="text" />
                <button>Add</button>
            </form>
            <Recommendations
                neighbors={state}
                {...getPrayerRecommendations()}
            />
        </div>
    )
}

export default App
