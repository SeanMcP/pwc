import React from 'react'
import { useLocalStorage } from './useLocalStorage'

function NeighborView(props) {
    const [, { getNeighbor }] = useLocalStorage()
    const neighbor = getNeighbor(props.id)
    return (
        <div className="NeighborView">
            <pre>{JSON.stringify(neighbor, null, 2)}</pre>
        </div>
    )
}

export default NeighborView
