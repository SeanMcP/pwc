import React from 'react'
import Grid from 'components/Grid/Grid'
import ItemTypeTile from 'components/ItemTypeTile/ItemTypeTile'
import ViewContainer from 'components/ViewContainer/ViewContainer'

import ITEMS from 'constants/items'

function SelectTypeToAddView() {
    return (
        <ViewContainer title="Add">
            <h2>What type of item would you like to add?</h2>
            <Grid columns={2} gap="1rem">
                {ITEMS.order.map((type) => (
                    <ItemTypeTile key={type} type={type} />
                ))}
            </Grid>
        </ViewContainer>
    )
}

export default SelectTypeToAddView
