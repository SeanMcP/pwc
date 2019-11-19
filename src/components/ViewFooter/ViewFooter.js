import React from 'react'
import Icon from 'components/Icon/Icon'
import ICONS from 'constants/icons'
import NavLink from 'components/NavLink/NavLink'
import ROUTES from 'constants/routes'
import ViewContent from 'components/ViewContent/ViewContent'

import './ViewFooter.scss'

function ViewFooter() {
    return (
        <footer className="ViewFooter">
            <ViewContent squish>
                <nav className="ViewFooter__nav">
                    <NavLink className="ViewFooter__link" to={ROUTES.home}>
                        <Icon icon={ICONS.home} block />
                        <small>Home</small>
                    </NavLink>
                    <NavLink className="ViewFooter__link" to={ROUTES.list}>
                        <Icon icon={ICONS.list} block />
                        <small>List</small>
                    </NavLink>
                    <NavLink className="ViewFooter__link" to={ROUTES.settings}>
                        <Icon icon={ICONS.settings} block />
                        <small>Settings</small>
                    </NavLink>
                </nav>
            </ViewContent>
        </footer>
    )
}

export default ViewFooter
