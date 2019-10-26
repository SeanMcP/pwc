import React from 'react'
import { buildRoute } from 'constants/routes'
import AppLink from 'components/AppLink/AppLink'

function SearchResults({ data, query }) {
    let output
    if (query) {
        const results = []
        for (const id in data) {
            const item = data[id]
            // This vvvvvv is a costly procedure. Consider revising.
            const tagMatch = item.tags.some(tag => tag.includes(query))
            if (
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                tagMatch
            ) {
                results.push(
                    <li key={id} className="SearchResults__item">
                        <AppLink to={buildRoute.item(id)}>{item.name}</AppLink>
                    </li>
                )
            }
        }
        if (results.length === 0) {
            output = <p>No results found for "{query}"</p>
        } else {
            output = <ul>{results}</ul>
        }
    } else {
        output = <p>Search for a contact</p>
    }
    return <div className="SearchResults">{output}</div>
}

export default SearchResults
