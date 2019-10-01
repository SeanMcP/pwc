import React from 'react'
import onKey from 'onkey-event-manager'
import { useIndividuals } from 'store/useIndividuals'
import ButtonLink from 'components/ButtonLink/ButtonLink'
import IndividualsList from 'components/IndividualsList/IndividualsList'
import SearchBar from 'components/SearchBar/SearchBar'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import ROUTES from 'constants/routes'

function AllView() {
    const [query, setQuery] = React.useState('')
    const [individuals] = useIndividuals()
    return (
        <ViewContainer
            searchBar={
                <SearchBar
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={onKey({ Escape: () => setQuery('') })}
                />
            }
            title="All"
        >
            <IndividualsList individuals={individuals} query={query} />
            <ButtonLink to={ROUTES.add}>Add</ButtonLink>
        </ViewContainer>
    )
}

export default AllView
