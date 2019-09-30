import React from 'react'
import { SearchField } from 'components/Form/Form'

import './SearchBar.scss'

function SearchBar(props) {
    return (
        <section className="SearchBar">
            <SearchField {...props} />
        </section>
    )
}

SearchBar.defaultProps = {
    'aria-label': 'Search',
    placeholder: 'Search for a name',
    type: 'search'
}

export default SearchBar
