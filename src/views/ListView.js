import React from 'react'
import onKey from 'onkey-event-manager'
import { useItems } from 'store/useItems'
import FabContainer from 'components/FabContainer/FabContainer'
import ItemsList from 'components/ItemsList/ItemsList'
import LinkButton from 'components/LinkButton/LinkButton'
import SearchBar from 'components/SearchBar/SearchBar'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import ROUTES from 'constants/routes'

function ListView() {
    const [query, setQuery] = React.useState('')
    const [items] = useItems()
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
            <ItemsList.ByType items={items} query={query} />
            <FabContainer>
                <LinkButton
                    aria-label="Add item"
                    icon="Plus"
                    primary
                    to={ROUTES.add}
                />
            </FabContainer>
        </ViewContainer>
    )
}

export default ListView
