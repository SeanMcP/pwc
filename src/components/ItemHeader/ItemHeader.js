import React from 'react'
import Icon from 'components/Icon/Icon'
import ICONS from 'constants/icons'

import './ItemHeader.scss'
import colorHash from 'utils/colorHashUtils'

function ItemHeader({ name, type }) {
    return (
        <header
            className="ItemHeader"
            style={{ backgroundColor: colorHash.hex(name) }}
        >
            <Icon icon={ICONS[type]} />
            <h2 className="ItemHeader__heading">{name}</h2>
        </header>
    )
}

export default ItemHeader
