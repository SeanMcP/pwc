import React from 'react'
import { Router as _Router } from '@reach/router'

const Home = () => <div>Home</div>
const AddNeighbor = () => <div>Add</div>
const ViewNeighbor = () => <div>Neighbor</div>

function Router() {
    return (
        <_Router>
            <Home path="/" />
            <AddNeighbor path="/neighbor/add" />
            <ViewNeighbor path="/neighbor/:id" />
        </_Router>
    )
}

export default Router
