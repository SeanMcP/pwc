import React from 'react'
import { Router } from '@reach/router'
import AddNeighborView from './AddNeighborView'
import NeighborView from './NeighborView'
import NeighborsView from './NeighborsView'
import HomeView from './HomeView'

export default function() {
    return (
        <Router>
            <HomeView path="/" />
            <AddNeighborView path="/neighbor/add" />
            <NeighborView path="/neighbor/:id" />
            <NeighborsView path="/neighbors" />
        </Router>
    )
}
