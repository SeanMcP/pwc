import React from 'react'
import Recommendations from 'Recommendations'
import { Link } from '@reach/router'
import ROUTES from 'constants/routes'
import ViewContainer from 'ViewContainer'
import { SearchInput } from 'evergreen-ui'

function HomeView() {
    return (
        <ViewContainer>
            <Link to={ROUTES.search}>
                <SearchInput placeholder="Search names or tags" width="100%" />
            </Link>
            <Recommendations />
            <Link to={ROUTES.all}>View all</Link>
        </ViewContainer>
    )
}

export default HomeView
