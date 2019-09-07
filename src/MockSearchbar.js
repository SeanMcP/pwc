import React from 'react'
import { Link } from '@reach/router'
import { SearchInput } from 'evergreen-ui'
import ROUTES from 'constants/routes'

function MockSearchbar() {
    return (
        <Link to={ROUTES.search}>
            <SearchInput placeholder="Search names or tags" width="100%" />
        </Link>
    )
}

export default MockSearchbar
