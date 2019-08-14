import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import NeighborsList from './NeighborsList'
import { Link } from '@reach/router'

function NeighborsView(props) {
    const [neighbors] = useLocalStorage()
    return (
        <div className="NeighborsView">
            <NeighborsList neighbors={neighbors} />
            <Link to="/neighbor/add">Add neighbor</Link>
        </div>
    )
}

export default NeighborsView
