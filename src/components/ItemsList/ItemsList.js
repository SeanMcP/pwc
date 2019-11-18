import React from 'react'
import ColorHash from 'color-hash'
import AppLink from 'components/AppLink/AppLink'
import Icon from 'components/Icon/Icon'
import { buildRoute } from 'constants/routes'

import All from './ItemsListAll'
import ByType from './ItemsListByType'

import './ItemsList.scss'

export function renderItems({ items = {}, list = [], query = '' }) {
    return list.reduce((acc, id) => {
        const item = items[id]
        const colorHash = new ColorHash({ lightness: 0.5, saturation: 0.5 })
        if (shouldAdd(item, query)) {
            acc.push(
                <li className="ItemsList__item" key={id}>
                    <AppLink
                        className="ItemsList__link"
                        to={buildRoute.item(id)}
                    >
                        <span
                            className="ItemsList__icon"
                            style={{ background: colorHash.hex(item.name) }}
                        >
                            {item.name[0].toUpperCase()}
                        </span>
                        <span className="ItemsList__name">{item.name}</span>
                        {item.favorite && <Icon icon="Star" />}
                    </AppLink>
                </li>
            )
        }
        return acc
    }, [])
}

export const sortByMap = {
    name: (a, b) => {
        if (a.name > b.name) {
            return +1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    }
}

export function shouldAdd(individual, query) {
    // If there is no query, it should be added
    if (!query) return true
    const lowerQuery = query.toLowerCase()
    // If there is a query and the name or a tag* matches,
    // then it should be added
    if (
        individual.name.toLowerCase().includes(lowerQuery)
        // *This is a costly procedure. Add this only when the tag
        // feature is fully developed.
        // || individual.tags.some(tag => tag.includes(lowerQuery))
    ) {
        return true
    }
    // Otherwise, return false
    return false
}

export default {
    All,
    ByType
}
