import React from 'react'
import { Text, Pane, UnorderedList, ListItem } from 'evergreen-ui'
import { buildRoute } from 'constants/routes'
import AppLink from 'AppLink'

function SearchResults({ data, query }) {
    let output
    if (query) {
        const results = []
        for (const id in data) {
            const item = data[id]
            // This vvvvvv is a costly procedure. Consider revising.
            const tagMatch = item.tags.some(tag => tag.includes(query))
            if (
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                tagMatch
            ) {
                results.push(
                    <ListItem key={id} className="SearchResults__item">
                        <AppLink to={buildRoute.individual(id)}>
                            {item.name}
                        </AppLink>
                    </ListItem>
                )
            }
        }
        if (results.length === 0) {
            output = <Text>No results found for "{query}"</Text>
        } else {
            output = <UnorderedList>{results}</UnorderedList>
        }
    } else {
        output = <Text>Search for a contact</Text>
    }
    return <Pane>{output}</Pane>
}

export default SearchResults
