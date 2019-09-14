import React from 'react'
import { useIndividuals } from 'store/useIndividuals'
import SearchResults from 'SearchResults'
import ViewContainer from 'ViewContainer'
import { SearchField } from 'Form'

function SearchView(props) {
    const [data] = useIndividuals()
    const [query, setQuery] = React.useState('')
    return (
        <ViewContainer title="Search" hideHeader>
            <header>
                <SearchField
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search names"
                    value={query}
                    autoFocus
                />
            </header>
            <SearchResults data={data} query={query} />
        </ViewContainer>
    )
}

export default SearchView
