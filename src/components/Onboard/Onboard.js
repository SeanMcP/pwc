import React from 'react'
import ButtonLink from 'components/ButtonLink/ButtonLink'
import ROUTES from 'constants/routes'
import IconHeading from 'components/IconHeading/IconHeading'

function Onboard() {
    return (
        <div className="Onboard">
            <IconHeading icon="Smile">Welcome!</IconHeading>
            <p>
                PWC makes it easy to manage your prayer list. Let's get started!
            </p>
            <ButtonLink full primary to={ROUTES.add}>
                Add an item
            </ButtonLink>
        </div>
    )
}

export default Onboard
