import React from 'react'
import { Link } from '@reach/router'
import ROUTES from 'constants/routes'
import { SearchField } from 'Form'

function MockSearchbar(props) {
    return (
        <Link to={ROUTES.search}>
            <SearchField {...props} />
        </Link>
    )
}

export default MockSearchbar
