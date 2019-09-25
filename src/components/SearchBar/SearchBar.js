import React from 'react'
import { SearchField } from 'Form'
import ViewContent from 'components/ViewContent/ViewContent'

import './SearchBar.scss'

function SearchBar(props) {
    return (
        <section className="SearchBar">
            <ViewContent>
                <SearchField {...props} />
            </ViewContent>
        </section>
    )
}

SearchBar.defaultProps = {
    'aria-label': 'Search',
    placeholder: 'Search for a name',
    type: 'search'
}

export default SearchBar
