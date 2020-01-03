import React from 'react'
import { SearchField } from 'components/Form/Form'
import ContentContainer from 'components/ContentContainer/ContentContainer'

import './SearchBar.scss'

function SearchBar(props) {
    return (
        <form
            autoComplete="off"
            className="SearchBar"
            onSubmit={(e) => e.preventDefault()}
            role="search"
        >
            <ContentContainer>
                <SearchField {...props} />
            </ContentContainer>
        </form>
    )
}

SearchBar.defaultProps = {
    'aria-label': 'Search',
    placeholder: 'Search for a name',
}

export default SearchBar
