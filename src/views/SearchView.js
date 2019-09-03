import React from 'react'
import { useIndividuals } from 'store/useIndividuals'
import SearchResults from 'SearchResults'
import { SearchInput } from 'evergreen-ui'
import ViewContainer from 'ViewContainer'

function SearchView(props) {
    const [data] = useIndividuals()
    const [query, setQuery] = React.useState('')
    return (
        <ViewContainer title="Search">
            <header>
                <SearchInput
                    type="search"
                    aria-label="Search"
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search names or tags"
                    value={query}
                    width="100%"
                    autoFocus
                />
            </header>
            <SearchResults data={data} query={query} />
        </ViewContainer>
    )
}

export default SearchView
