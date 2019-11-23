import React from 'react'

import Icon from 'components/Icon/Icon'
import LinkButton from 'components/LinkButton/LinkButton'

import { buildRoute } from 'constants/routes'
import ICONS from 'constants/icons'
import ITEMS from 'constants/items'

import './ItemTypeTile.scss'

const ICONS_BY_ITEM_TYPE = {
    [ITEMS.types.person.id]: ICONS.person,
    [ITEMS.types.place.id]: ICONS.place,
    [ITEMS.types.thing.id]: ICONS.thing,
    [ITEMS.types.idea.id]: ICONS.idea,
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
