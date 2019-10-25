import React from 'react'
import ViewContent from 'components/ViewContent/ViewContent'
import './ViewFooter.scss'
// import AppLink from 'components/AppLink/AppLink'
import ROUTES from 'constants/routes'
import NavLink from 'components/NavLink/NavLink'
import Icon from 'components/Icon/Icon'

function ViewFooter() {
    return (
        <footer className="ViewFooter">
            <ViewContent squish>
                <nav className="ViewFooter__nav">
                    <NavLink className="ViewFooter__link" to={ROUTES.home}>
                        <Icon icon="Home" block />
                        <small>Home</small>
                    </NavLink>
                    <NavLink className="ViewFooter__link" to={ROUTES.all}>
                        <Icon icon="Users" block />
                        <small>All</small>
                    </NavLink>
                    <NavLink className="ViewFooter__link" to={ROUTES.settings}>
                        <Icon icon="Settings" block />
                        <small>Settings</small>
                    </NavLink>
                </nav>
            </ViewContent>
        </footer>
    )
}

export default ViewFooter
