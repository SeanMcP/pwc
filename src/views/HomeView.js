import React from 'react'

import AddFab from 'components/AddFab/AddFab'
import BibleVerse from 'components/BibleVerse/BibleVerse'
import Grid from 'components/Grid/Grid'
import FabContainer from 'components/FabContainer/FabContainer'
import Onboard from 'components/Onboard/Onboard'
import Recommendations from 'components/Recommendations/Recommendations'
import ViewContainer from 'components/ViewContainer/ViewContainer'

import { useItems } from 'store/useItems'

function HomeView() {
    const [, { areItems }] = useItems()
    return (
        <ViewContainer>
            {areItems() ? (
                <>
                    <Grid gap="2rem">
                        <BibleVerse />
                        <Recommendations />
                    </Grid>
                    <FabContainer>
                        <AddFab />
                    </FabContainer>
                </>
            ) : (
                <Onboard />
            )}
        </ViewContainer>
    )
}

export default HomeView
