import React from 'react'
import { Router } from '@reach/router'
import AddNeighborView from './AddNeighborView'
import NeighborView from './NeighborView'
import NeighborsView from './NeighborsView'

const Home = () => <div>Home</div>

export default function() {
    return (
        <Router>
            <Home path="/" />
            <AddNeighborView path="/neighbor/add" />
            <NeighborView path="/neighbor/:id" />
            <NeighborsView path="/neighbors" />
        </Router>
    )
}
