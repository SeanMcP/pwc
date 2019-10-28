import React from 'react'
import Emoji from 'a11y-react-emoji'
import { buildRoute } from 'constants/routes'
import AppLink from 'components/AppLink/AppLink'
import './ItemsList.scss'

const sortByMap = {
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

function shouldAdd(individual, query) {
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

function ItemsList({ individuals, sortBy = 'name', query }) {
    const list = Object.keys(individuals).sort((a, b) =>
        sortByMap[sortBy](individuals[a], individuals[b])
    )

    const items = list.reduce((acc, id) => {
        const individual = individuals[id]
        if (shouldAdd(individual, query)) {
            acc.push(
                <li className="ItemsList__item" key={id}>
                    <AppLink
                        className="ItemsList__link"
                        to={buildRoute.item(id)}
                    >
                        <span className="ItemsList__icon">
                            {individual.name[0]}
                        </span>
                        <span className="ItemsList__name">
                            {individual.name}
                        </span>
                        {individual.favorite && (
                            <Emoji label="Favorited" symbol="⭐️" />
                        )}
                    </AppLink>
                </li>
            )
        }
        return acc
    }, [])

    return (
        <div className="ItemsList">
            <ul className="ItemsList__list reset">
                {query && items.length === 0 ? (
                    <li className="ItemsList__no-matches">
                        No matches found for "{query}"
                    </li>
                ) : (
                    items
                )}
            </ul>
        </div>
    )
}

export default ItemsList
