import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { navigate } from '@reach/router'
import ROUTES from './constants/routes'

function NeighborView(props) {
    const [, { deleteNeighbor, getNeighbor }] = useLocalStorage()
    const neighbor = getNeighbor(props.id)
    function handleDelete() {
        deleteNeighbor(props.id)
        navigate(ROUTES.all)
    }
    return (
        <div className="NeighborView">
            <pre>{JSON.stringify(neighbor, null, 2)}</pre>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default NeighborView
