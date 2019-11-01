import React from 'react'
import BibleVerse from 'components/BibleVerse/BibleVerse'
import Recommendations from 'components/Recommendations/Recommendations'
import ViewContainer from 'components/ViewContainer/ViewContainer'

function HomeView() {
    return (
        <ViewContainer>
            <Recommendations />
            <BibleVerse />
        </ViewContainer>
    )
}

export default HomeView
