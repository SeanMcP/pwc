import React from 'react'
import { Link } from '@reach/router'
import { buildRoute } from 'constants/routes'

function SearchResults({ data, query }) {
    let output
    if (query) {
        const results = []
        for (const id in data) {
            const item = data[id]
            // This vvvvvv is a costly procedure. Consider revising.
            const tagMatch = item.tags.some(tag => tag.includes(query))
            if (item.name.includes(query) || tagMatch) {
                results.push(
                    <li key={id} className="SearchResults__item">
                        <Link to={buildRoute.individual(id)}>{item.name}</Link>
                    </li>
                )
            }
        }
        if (results.length === 0) {
            output = (
                <p className="SearchResults__none-found">
                    No results found for "{query}"
                </p>
            )
        } else {
            output = <ul className="SearchResults__list">{results}</ul>
        }
    } else {
        output = (
            <p className="SearchResults__help-text">Search for a contact</p>
        )
    }
    return <div className="SearchResults">{output}</div>
}

export default SearchResults
