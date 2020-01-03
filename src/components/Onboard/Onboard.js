import React from 'react'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import IconHeading from 'components/IconHeading/IconHeading'
import ICONS from 'constants/icons'
import LinkButton from 'components/LinkButton/LinkButton'
import ROUTES from 'constants/routes'
import APP_NAME from 'constants/appName'

import './Onboard.scss'

function Onboard() {
    return (
        <div className="Onboard">
            <ContentContainer>
                <IconHeading icon={ICONS.onboard}>Welcome</IconHeading>
                <p>
                    {APP_NAME} makes it easy to manage your prayer list. Let's
                    get started!
                </p>
                <LinkButton full primary to={ROUTES.add}>
                    Add an item
                </LinkButton>
            </ContentContainer>
        </div>
    )
}

export default Onboard
