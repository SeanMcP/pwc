import React from 'react'
import { SearchField } from 'components/Form/Form'

import './SearchBar.scss'
import ViewContent from 'components/ViewContent/ViewContent'

function SearchBar(props) {
    return (
        <form
            className="SearchBar"
            onSubmit={e => e.preventDefault()}
            role="search"
        >
            <ViewContent>
                <SearchField {...props} />
            </ViewContent>
        </form>
    )
}

SearchBar.defaultProps = {
    'aria-label': 'Search',
    placeholder: 'Search for a name'
}

export default SearchBar
