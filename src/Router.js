import React from 'react'
import { Router } from '@reach/router'
import AddItemView from 'views/AddItemView'
import AllView from 'views/AllView'
import EditView from 'views/EditView'
import HomeView from 'views/HomeView'
import IndividualView from 'views/IndividualView'
import ROUTES from 'constants/routes'
import SettingsView from 'views/SettingsView'
import SelectTypeToAddView from 'views/SelectTypeToAddView'

export default function() {
    return (
        <Router>
            <HomeView path={ROUTES.home} />
            <AddItemView path={ROUTES.addItem} />
            <SelectTypeToAddView path={ROUTES.add} />
            <IndividualView path={ROUTES.individual} />
            <EditView path={ROUTES.edit} />
            <AllView path={ROUTES.all} />
            <SettingsView path={ROUTES.settings} />
        </Router>
    )
}
