import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import NeighborsList from './NeighborsList'
import { Link } from '@reach/router'
import ROUTES from './constants/routes'

function NeighborsView(props) {
    const [neighbors] = useLocalStorage()
    return (
        <div className="NeighborsView">
            <NeighborsList neighbors={neighbors} />
            <Link to={ROUTES.add}>Add</Link>
        </div>
    )
}

export default NeighborsView
