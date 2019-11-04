import React from 'react'
import LinkButton from 'components/LinkButton/LinkButton'
import ROUTES from 'constants/routes'
import IconHeading from 'components/IconHeading/IconHeading'

function Onboard() {
    return (
        <div className="Onboard">
            <IconHeading icon="Smile">Welcome!</IconHeading>
            <p>
                PWC makes it easy to manage your prayer list. Let's get started!
            </p>
            <LinkButton full primary to={ROUTES.add}>
                Add an item
            </LinkButton>
        </div>
    )
}

export default Onboard
