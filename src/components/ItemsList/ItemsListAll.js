import React from 'react'
import { renderItems, sortByMap } from './ItemsList'

function ItemsList({ items, sortBy = 'name', query }) {
    const list = Object.keys(items).sort((a, b) =>
        sortByMap[sortBy](items[a], items[b])
    )

    const listOfItems = renderItems({ items, list, query })

    return (
        <div className="ItemsList ItemsList--all">
            <h2 style={{ marginTop: 0 }}>All</h2>
            <ul className="ItemsList__list reset">
                {query && listOfItems.length === 0 ? (
                    <li className="ItemsList__no-matches">
                        No matches found for "{query}"
                    </li>
                ) : (
                    listOfItems
                )}
            </ul>
        </div>
    )
}

export default ItemsList
