import React from 'react'
import { Router } from '@reach/router'
import AddNeighborView from './AddNeighborView'

const Home = () => <div>Home</div>
const ViewNeighbor = () => <div>Neighbor</div>

export default function() {
    return (
        <Router>
            <Home path="/" />
            <AddNeighborView path="/neighbor/add" />
            <ViewNeighbor path="/neighbor/:id" />
        </Router>
    )
}
