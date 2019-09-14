import React from 'react'
import ViewContent from 'components/ViewContent/ViewContent'
import './ViewFooter.scss'
// import AppLink from 'components/AppLink/AppLink'
import ROUTES from 'constants/routes'
import NavLink from 'components/NavLink/NavLink'

function ViewFooter() {
    return (
        <footer className="ViewFooter">
            <ViewContent squish>
                <nav className="ViewFooter__nav">
                    <NavLink className="ViewFooter__link" to={ROUTES.home}>
                        Home
                    </NavLink>
                    <NavLink className="ViewFooter__link" to={ROUTES.search}>
                        Search
                    </NavLink>
                    <NavLink className="ViewFooter__link" to={ROUTES.all}>
                        All
                    </NavLink>
                    <NavLink className="ViewFooter__link" to={ROUTES.settings}>
                        Settings
                    </NavLink>
                </nav>
            </ViewContent>
        </footer>
    )
}

export default ViewFooter
