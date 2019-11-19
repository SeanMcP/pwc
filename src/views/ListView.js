import React from 'react'
import onKey from 'onkey-event-manager'

import FabContainer from 'components/FabContainer/FabContainer'
import Grid from 'components/Grid/Grid'
import ItemsList from 'components/ItemsList/ItemsList'
import LinkButton from 'components/LinkButton/LinkButton'
import SearchBar from 'components/SearchBar/SearchBar'
import SortListRadio from 'components/SortListRadio/SortListRadio'
import ViewContainer from 'components/ViewContainer/ViewContainer'

import ICONS from 'constants/icons'
import ROUTES from 'constants/routes'
import { useItems } from 'store/useItems'

function ListView() {
    const [query, setQuery] = React.useState('')
    const sortState = React.useState('All')
    const [items, { areItems }] = useItems()
    const FilteredItemsList = ItemsList[sortState[0]]
    return (
        <ViewContainer
            searchBar={
                <SearchBar
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={onKey({ Escape: () => setQuery('') })}
                />
            }
            title="Prayer List"
        >
            {areItems() ? <Grid gap="1rem">
                <SortListRadio state={sortState} />
                <FilteredItemsList items={items} query={query} />
            </Grid> : <p style={{ marginTop: 0 }}>You don't have any items in your list. Try adding some!</p>}
            <FabContainer>
                <LinkButton
                    aria-label="Add item"
                    icon={ICONS.add}
                    primary
                    to={ROUTES.add}
                />
            </FabContainer>
        </ViewContainer>
    )
}

export default ListView
