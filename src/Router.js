import React from 'react'
import { Router } from '@reach/router'
import AddView from 'views/AddView'
import AllView from 'views/AllView'
import EditView from 'views/EditView'
import HomeView from 'views/HomeView'
import IndividualView from 'views/IndividualView'
import ROUTES from 'constants/routes'

export default function() {
    return (
        <Router>
            <HomeView path={ROUTES.home} />
            <AddView path={ROUTES.add} />
            <IndividualView path={ROUTES.individual} />
            <EditView path={ROUTES.edit} />
            <AllView path={ROUTES.all} />
        </Router>
    )
}
