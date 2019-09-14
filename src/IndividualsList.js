import React from 'react'
import { Link } from '@reach/router'
import Emoji from 'a11y-react-emoji'
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
        <div className="IndividualsList">
            <ul className="reset">
                {orderedList.map(id => {
                    const individual = individuals[id]
                    return (
                        <li key={id}>
                            <Link to={buildRoute.individual(id)}>
                                <div>
                                    <p>{individual.name}</p>
                                    {individual.favorite && (
                                        <Emoji label="Favorited" symbol="⭐️" />
                                    )}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IndividualsList
