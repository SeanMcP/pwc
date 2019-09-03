import React from 'react'
import { Link } from '@reach/router'
import { Card, majorScale, Pane } from 'evergreen-ui'
import { buildRoute } from 'constants/routes'

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
                                <Card
                                    border="default"
                                    padding={majorScale(1)}
                                    marginBottom={majorScale(1)}
                                >
                                    {individual.name}
                                </Card>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Pane>
    )
}

export default IndividualsList
