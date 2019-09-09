import React from 'react'
import { Router } from '@reach/router'
import AddView from 'views/AddView'
import AllView from 'views/AllView'
import EditView from 'views/EditView'
import HomeView from 'views/HomeView'
import IndividualView from 'views/IndividualView'
import ROUTES from 'constants/routes'
import SearchView from 'views/SearchView'
import SettingsView from 'views/SettingsView'

export default function() {
    return (
        <Router>
            <HomeView path={ROUTES.home} />
            <AddView path={ROUTES.add} />
            <IndividualView path={ROUTES.individual} />
            <EditView path={ROUTES.edit} />
            <AllView path={ROUTES.all} />
            <SearchView path={ROUTES.search} />
            <SettingsView path={ROUTES.settings} />
        </Router>
    )
}
