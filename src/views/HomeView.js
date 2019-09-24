import React from 'react'
import Recommendations from 'components/Recommendations/Recommendations'
import ViewContainer from 'components/ViewContainer/ViewContainer'

function HomeView() {
    return (
        <ViewContainer withSearch>
            <Recommendations />
        </ViewContainer>
    )
}

export default HomeView
