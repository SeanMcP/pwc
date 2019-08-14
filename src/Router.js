import React from 'react'
import { Router } from '@reach/router'
import AddNeighborView from './AddNeighborView'
import NeighborsView from './NeighborsView'

const Home = () => <div>Home</div>
const ViewNeighbor = () => <div>Neighbor</div>

export default function() {
    return (
        <Router>
            <Home path="/" />
            <AddNeighborView path="/neighbor/add" />
            <ViewNeighbor path="/neighbor/:id" />
            <NeighborsView path="/neighbors" />
        </Router>
    )
}
