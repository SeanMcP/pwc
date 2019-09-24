import React from 'react'
import { useIndividuals } from 'store/useIndividuals'
import SearchResults from 'SearchResults'
import ViewContainer from 'components/ViewContainer/ViewContainer'

function SearchView() {
    const [data] = useIndividuals()
    const [query, setQuery] = React.useState('')
    return (
        <ViewContainer
            title="Search"
            searchProps={{
                onChange: e => setQuery(e.target.value),
                value: query,
                autoFocus: true
            }}
            withSearch
        >
            <SearchResults data={data} query={query} />
        </ViewContainer>
    )
}

export default SearchView
