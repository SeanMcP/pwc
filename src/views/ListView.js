import React from 'react'
import onKey from 'onkey-event-manager'
import { useItems } from 'store/useItems'
import ButtonLink from 'components/ButtonLink/ButtonLink'
import ItemsList from 'components/ItemsList/ItemsList'
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
            title="All Items"
        >
            <ItemsList individuals={items} query={query} />
            <ButtonLink to={ROUTES.add} modifiers={['fab', 'primary']}>
                Add
            </ButtonLink>
        </ViewContainer>
    )
}

export default ListView
