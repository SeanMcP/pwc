import React from 'react'
import Emoji from 'a11y-react-emoji'
import { buildRoute } from 'constants/routes'
import AppLink from 'components/AppLink/AppLink'
import './IndividualsList.scss'

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
            <ul className="IndividualsList__list reset">
                {orderedList.map(id => {
                    const individual = individuals[id]
                    return (
                        <li className="IndividualsList__item" key={id}>
                            <AppLink
                                className="IndividualsList__link"
                                to={buildRoute.individual(id)}
                            >
                                <span className="IndividualsList__icon">
                                    {individual.name[0]}
                                </span>
                                <span className="IndividualsList__name">
                                    {individual.name}
                                </span>
                                {individual.favorite && (
                                    <Emoji label="Favorited" symbol="⭐️" />
                                )}
                            </AppLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IndividualsList
