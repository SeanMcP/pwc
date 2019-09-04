import React from 'react'
import Recommendations from 'Recommendations'
import { Link } from '@reach/router'
import ROUTES from 'constants/routes'
import ViewContainer from 'ViewContainer'
import { SearchInput } from 'evergreen-ui'
import AppLink from 'AppLink'

function HomeView() {
    return (
        <ViewContainer>
            <Link to={ROUTES.search}>
                <SearchInput placeholder="Search names or tags" width="100%" />
            </Link>
            <Recommendations />
            <AppLink to={ROUTES.all}>View All</AppLink>
        </ViewContainer>
    )
}

export default HomeView
