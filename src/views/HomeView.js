import React from 'react'
import Recommendations from 'Recommendations'
import ROUTES from 'constants/routes'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import AppLink from 'components/AppLink/AppLink'
import MockSearchbar from 'MockSearchbar'

function HomeView() {
    return (
        <ViewContainer>
            <MockSearchbar />
            <Recommendations />
            <AppLink to={ROUTES.all}>View All</AppLink>
        </ViewContainer>
    )
}

export default HomeView
