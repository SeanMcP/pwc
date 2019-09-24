import React from 'react'
import { Match } from '@reach/router'
import MockSearchbar from 'MockSearchbar'
import { SearchField } from 'Form'
import ViewContent from 'components/ViewContent/ViewContent'
import ROUTES from 'constants/routes'

import './SearchBar.scss'

function SearchBar(props) {
    return (
        <section className="SearchBar">
            <ViewContent>
                <Match path={ROUTES.search}>
                    {({ match }) =>
                        match ? (
                            <SearchField {...props} />
                        ) : (
                            <MockSearchbar {...props} />
                        )
                    }
                </Match>
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
