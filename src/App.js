import React from 'react'
import './App.css'
import useLocalStorage from './useLocalStorage'
import Recommendations from './Recommendations'
import NeighborsList from './NeighborsList'

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
            <NeighborsList neighbors={state} />
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
