import React from 'react'
import Recommendations from 'components/Recommendations/Recommendations'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import MockSearchbar from 'MockSearchbar'

function HomeView() {
    return (
        <ViewContainer>
            <MockSearchbar />
            <Recommendations />
        </ViewContainer>
    )
}

export default HomeView
