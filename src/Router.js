import React from 'react'
import { Router } from '@reach/router'
import AddNeighborView from './AddNeighborView'
import NeighborView from './NeighborView'
import NeighborsView from './NeighborsView'
import HomeView from './HomeView'
import ROUTES from './constants/routes'

export default function() {
    return (
        <Router>
            <HomeView path={ROUTES.home} />
            <AddNeighborView path={ROUTES.add} />
            <NeighborView path={ROUTES.individual} />
            <NeighborsView path={ROUTES.all} />
        </Router>
    )
}
