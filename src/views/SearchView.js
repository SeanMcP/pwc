import React from 'react'
import { useIndividuals } from 'store/useIndividuals'
import SearchResults from 'SearchResults'

function SearchView(props) {
    const [data] = useIndividuals()
    const [query, setQuery] = React.useState('')
    return (
        <div className="SearchView">
            <header>
                <input
                    type="search"
                    aria-label="Search"
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search names or tags"
                    value={query}
                    autoFocus
                />
            </header>
            <SearchResults data={data} query={query} />
        </div>
    )
}

export default SearchView
