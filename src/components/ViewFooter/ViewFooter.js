import React from 'react'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import Icon from 'components/Icon/Icon'
import ICONS from 'constants/icons'
import NavLink from 'components/NavLink/NavLink'
import ROUTES from 'constants/routes'

import './ViewFooter.scss'

function ViewFooter() {
    return (
        <footer className="ViewFooter">
            <ContentContainer squish>
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
            </ContentContainer>
        </footer>
    )
}

export default ViewFooter
