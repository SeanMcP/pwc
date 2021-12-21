import React from 'react'

import AddFab from 'components/AddFab/AddFab'
import BibleVerse from 'components/BibleVerse/BibleVerse'
import Grid from 'components/Grid/Grid'
import FabContainer from 'components/FabContainer/FabContainer'
import Onboard from 'components/Onboard/Onboard'
import Recommendations from 'components/Recommendations/Recommendations'
import ViewContainer from 'components/ViewContainer/ViewContainer'

import { useItems } from 'store/useItems'
import useItemsV2 from 'store/useItemsV2'

function HomeView() {
    const [, { areItems }] = useItems()
    const [items, { recordPrayerForId }] = useItemsV2()
    console.log('items', items)
    return (
        <ViewContainer>
            {areItems() ? (
                <>
                    <Grid gap="2rem">
                        <BibleVerse />
                        <Recommendations />
                        <button
                            onClick={() =>
                                recordPrayerForId(
                                    '7bb9968a-96e5-4724-a6b0-17b8c4f5942c'
                                )
                            }
                        >
                            Record
                        </button>
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
