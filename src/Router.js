import React from 'react'
import { Router } from '@reach/router'
import ROUTES from 'constants/routes'

import AddItemView from 'views/AddItemView'
import EditView from 'views/EditView'
import HomeView from 'views/HomeView'
import ItemView from 'views/ItemView'
import ListView from 'views/ListView'
import SelectTypeToAddView from 'views/SelectTypeToAddView'
import SettingsView from 'views/SettingsView'

export default function() {
    return (
        <Router>
            <HomeView path={ROUTES.home} />
            <AddItemView path={ROUTES.addItem} />
            <SelectTypeToAddView path={ROUTES.add} />
            <ItemView path={ROUTES.item} />
            <EditView path={ROUTES.edit} />
            <ListView path={ROUTES.list} />
            <SettingsView path={ROUTES.settings} />
        </Router>
    )
}
