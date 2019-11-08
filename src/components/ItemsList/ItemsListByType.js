import React from 'react'
import ITEMS from 'constants/items'
import { renderItems, sortByMap } from './ItemsList'

function getOrderedItemsByType(items = {}, sortBy = 'name') {
    const typeMap = {}
    const ids = Object.keys(items)
    if (ids.length) {
        ids.forEach(id => {
            const { type } = items[id]

            if (!typeMap[type]) {
                typeMap[type] = []
            }

            typeMap[type].push(id)
        })

        for (const type in typeMap) {
            typeMap[type].sort((aId, bId) =>
                sortByMap[sortBy](items[aId], items[bId])
            )
        }
    }
    return typeMap
}

function renderTypeHeading(type, items = []) {
    const areMany = items.length > 1
    const heading = areMany ? ITEMS.types[type].plural : type
    const capitalized = heading[0].toUpperCase() + heading.slice(1)
    return `${capitalized}${areMany ? ` (${items.length})` : ''}`
}

function ItemsListByType({ items, sortBy = 'name', query }) {
    const orderedItemsByType = getOrderedItemsByType(items, sortBy)

    const typeLists = []
    for (const type in orderedItemsByType) {
        const itemsByType = renderItems({
            items,
            list: orderedItemsByType[type],
            query
        })
        if (itemsByType.length) {
            typeLists.push(
                <div className="ItemsList__list-block" key={type}>
                    <h3 className="ItemsList__heading">
                        {renderTypeHeading(type, orderedItemsByType[type])}
                    </h3>
                    <ul className="ItemsList__list reset">{itemsByType}</ul>
                </div>
            )
        }
    }

    return (
        <div className="ItemsList ItemsList--by-type">
            <h2 style={{ marginTop: 0 }}>By Type</h2>
            {query && typeLists.length === 0 ? (
                <p className="ItemsList__no-matches">
                    No matches found for "{query}"
                </p>
            ) : (
                typeLists
            )}
        </div>
    )
}

export default ItemsListByType
