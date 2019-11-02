import React from 'react'

import BibleVerse from 'components/BibleVerse/BibleVerse'
import Grid from 'components/Grid/Grid'
import Onboard from 'components/Onboard/Onboard'
import Recommendations from 'components/Recommendations/Recommendations'
import ViewContainer from 'components/ViewContainer/ViewContainer'

import { useItems } from 'store/useItems'

function HomeView() {
    const [items] = useItems()
    const areNoItems = Object.keys(items).length === 0
    return (
        <ViewContainer>
            <Grid gap="2rem">
                {areNoItems && <Onboard />}
                <Recommendations />
                <BibleVerse />
            </Grid>
        </ViewContainer>
    )
}

export default HomeView
