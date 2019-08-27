import React from 'react'
import { useIndividuals } from 'store/useIndividuals'
import { Link } from '@reach/router'
import { buildRoute } from 'constants/routes'

function SearchView(props) {
    const [data] = useIndividuals()
    const [query, setQuery] = React.useState('')
    function renderResults() {
        const results = []
        if (query) {
            for (const id in data) {
                const item = data[id]
                if (item.name.includes(query) || item.tags.includes(query)) {
                    results.push(
                        <li key={id}>
                            <Link to={buildRoute.individual(id)}>
                                {item.name}
                            </Link>
                        </li>
                    )
                }
            }
        } else {
            results.push(<li key="none">Search for a contact</li>)
        }
        return <ul>{results}</ul>
    }
    return (
        <div className="SearchView">
            <header>
                <input
                    type="text"
                    aria-label="Search"
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search names or tags"
                    value={query}
                />
            </header>
            {renderResults()}
        </div>
    )
}

export default SearchView
