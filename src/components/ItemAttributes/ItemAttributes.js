import React from 'react'

import './ItemAttributes.scss'
import Icon from 'components/Icon/Icon'

function List({ children }) {
    return <ul className="ItemAttributes">{children}</ul>
}

function Item({ body, icon, title }) {
    return (
        <li className="ItemAttributes__item">
            <Icon icon={icon} />
            <small className="ItemAttributes__item-title">{title}</small>
            <div className="ItemAttributes__item-body">{body}</div>
        </li>
    )
}

export default {
    Item,
    List
}
