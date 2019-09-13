import React from 'react'
import { Link } from '@reach/router'
import { Icon, majorScale, Pane, Text, minorScale } from 'evergreen-ui'
import { buildRoute } from 'constants/routes'
import AppCard from 'AppCard'

function IndividualsList({ individuals, sortBy = 'name' }) {
    const sortByMap = {
        name: (a, b) => {
            if (a.name > b.name) {
                return +1
            } else if (a.name < b.name) {
                return -1
            } else {
                return 0
            }
        }
    }
    const orderedList = Object.keys(individuals).sort((a, b) =>
        sortByMap[sortBy](individuals[a], individuals[b])
    )
    return (
        <Pane>
            <ul className="reset">
                {orderedList.map(id => {
                    const individual = individuals[id]
                    return (
                        <li key={id}>
                            <Link to={buildRoute.individual(id)}>
                                <AppCard marginBottom={majorScale(2)}>
                                    <Text>{individual.name}</Text>
                                    {individual.favorite && (
                                        <Icon
                                            icon="star"
                                            marginLeft={minorScale(1)}
                                            aria-label="Favorited"
                                        />
                                    )}
                                </AppCard>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Pane>
    )
}

export default IndividualsList
