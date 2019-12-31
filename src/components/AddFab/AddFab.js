import React from 'react'
import LinkButton from 'components/LinkButton/LinkButton'
import ICONS from 'constants/icons'
import ROUTES from 'constants/routes'

function AddFab() {
    return (
        <LinkButton
            aria-label="Add item"
            icon={ICONS.add}
            primary
            to={ROUTES.add}
        />
    )
}

export default AddFab
