import React from 'react'
import ButtonLink from 'components/ButtonLink/ButtonLink'
import Icon from 'components/Icon/Icon'

import ITEMS from 'constants/items'
import { buildRoute } from 'constants/routes'

import './ItemTypeButtonLink.scss'

const ICONS_BY_ITEM_TYPE = {
    [ITEMS.types.person.id]: 'User',
    [ITEMS.types.place.id]: 'MapPin',
    [ITEMS.types.thing.id]: 'Briefcase',
    [ITEMS.types.idea.id]: 'Heart'
}

function ItemTypeButtonLink({ type }) {
    return (
        <ButtonLink
            className="ItemTypeButtonLink"
            to={buildRoute.addItem(type)}
            full
        >
            <Icon icon={ICONS_BY_ITEM_TYPE[type]} size="48px" block />
            <div className="ItemTypeButtonLink__text">
                {ITEMS.types[type].display}
            </div>
        </ButtonLink>
    )
}

export default ItemTypeButtonLink
