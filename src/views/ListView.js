import React from 'react'
import onKey from 'onkey-event-manager'

import AddFab from 'components/AddFab/AddFab'
import FabContainer from 'components/FabContainer/FabContainer'
import Grid from 'components/Grid/Grid'
import ItemsList from 'components/ItemsList/ItemsList'
import SearchBar from 'components/SearchBar/SearchBar'
import SortListRadio from 'components/SortListRadio/SortListRadio'
import ViewContainer from 'components/ViewContainer/ViewContainer'

// import { useItems } from 'store/useItems'
import useItemsV2 from 'store/useItemsV2'
import useSettings from 'store/useSettings'

function ListView() {
    const [query, setQuery] = React.useState('')
    const [{ listView = 'All' }] = useSettings()
    const sortState = React.useState(listView)
    // const [items, { areItems }, __DEV__] = useItems()
    const [items] = useItemsV2()
    const FilteredItemsList = ItemsList[sortState[0]]
    return (
        <ViewContainer
            subHeader={
                <>
                    <SearchBar
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={onKey({ Escape: () => setQuery('') })}
                    />
                    <SortListRadio state={sortState} />
                </>
            }
            title="Prayer List"
        >
            {true ? (
                <Grid gap="1rem">
                    <FilteredItemsList items={items} query={query} />
                </Grid>
            ) : (
                <p style={{ marginTop: 0 }}>
                    You don't have any items in your list. Try adding some!
                </p>
            )}
            <FabContainer>
                <AddFab />
            </FabContainer>
        </ViewContainer>
    )
}

export default ListView
