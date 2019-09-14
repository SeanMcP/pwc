import React from 'react'
import { Link } from '@reach/router'
import ROUTES from 'constants/routes'
import { SearchField } from 'Form'

function MockSearchbar() {
    return (
        <Link to={ROUTES.search}>
            <SearchField placeholder="Search for a name" />
        </Link>
    )
}

export default MockSearchbar
