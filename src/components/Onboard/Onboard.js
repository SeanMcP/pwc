import React from 'react'
import IconHeading from 'components/IconHeading/IconHeading'
import ICONS from 'constants/icons'
import LinkButton from 'components/LinkButton/LinkButton'
import ROUTES from 'constants/routes'
import ViewContent from 'components/ViewContent/ViewContent'

import './Onboard.scss'

function Onboard() {
    return (
        <div className="Onboard">
            <ViewContent>
                <IconHeading icon={ICONS.onboard}>Welcome</IconHeading>
                <p>
                    PWC makes it easy to manage your prayer list. Let's get started!
                </p>
                <LinkButton full primary to={ROUTES.add}>
                    Add an item
                </LinkButton>
            </ViewContent>
        </div>
    )
}

export default Onboard
