import React from 'react'
import { Router } from '@reach/router'

const Home = () => <div>Home</div>
const AddNeighbor = () => <div>Add</div>
const ViewNeighbor = () => <div>Neighbor</div>

export default function() {
    return (
        <Router>
            <Home path="/" />
            <AddNeighbor path="/neighbor/add" />
            <ViewNeighbor path="/neighbor/:id" />
        </Router>
    )
}
