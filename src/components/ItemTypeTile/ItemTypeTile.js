import React from 'react'
import LinkButton from 'components/LinkButton/LinkButton'
import Icon from 'components/Icon/Icon'

import ITEMS from 'constants/items'
import { buildRoute } from 'constants/routes'

import './ItemTypeTile.scss'

const ICONS_BY_ITEM_TYPE = {
    [ITEMS.types.person.id]: 'User',
    [ITEMS.types.place.id]: 'MapPin',
    [ITEMS.types.thing.id]: 'Briefcase',
    [ITEMS.types.idea.id]: 'Heart'
}

function ItemTypeTile({ type }) {
    return (
        <LinkButton className="ItemTypeTile" to={buildRoute.addItem(type)} full>
            <Icon icon={ICONS_BY_ITEM_TYPE[type]} size="48px" block />
            <div className="ItemTypeTile__text">
                {ITEMS.types[type].display}
            </div>
        </LinkButton>
    )
}

export default ItemTypeTile
