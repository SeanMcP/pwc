import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { navigate } from '@reach/router'

function AddNeighborView(props) {
    const [, { addNeighbor }] = useLocalStorage()
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const name = formData.get('name')
        if (name) {
            addNeighbor(name)
            form.reset()
            navigate('/neighbors')
        }
    }
    return (
        <div className="AddNeighborView">
            <form onSubmit={handleSubmit}>
                <label htmlFor="neighbor-input">Neighbor</label>
                <input id="neighbor-input" name="name" type="text" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddNeighborView
