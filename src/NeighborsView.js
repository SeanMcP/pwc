import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import NeighborsList from './NeighborsList'

function NeighborsView(props) {
    const [neighbors] = useLocalStorage()
    return (
        <div className="NeighborsView">
            <NeighborsList neighbors={neighbors} />
        </div>
    )
}

export default NeighborsView
