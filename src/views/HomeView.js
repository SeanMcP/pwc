import React from 'react'

import BibleVerse from 'components/BibleVerse/BibleVerse'
import Grid from 'components/Grid/Grid'
import Onboard from 'components/Onboard/Onboard'
import Recommendations from 'components/Recommendations/Recommendations'
import ViewContainer from 'components/ViewContainer/ViewContainer'

import { useItems } from 'store/useItems'

function HomeView() {
    const [, { areItems }] = useItems()
    return (
        <ViewContainer>
            {areItems() ? <Grid gap="2rem">
                <Recommendations />
                <BibleVerse />
            </Grid> : <Onboard />}
        </ViewContainer>
    )
}

export default HomeView
