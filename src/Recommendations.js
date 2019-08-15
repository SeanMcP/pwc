import React from 'react'
import Emoji from 'a11y-react-emoji'
import { Link } from '@reach/router'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'

function Recommendations({ count = 5 }) {
    const [individuals, { getPrayerRecommendations }] = useIndividuals()
    const { birthdays, lastPrayed } = getPrayerRecommendations(count)
    return (
        <ol>
            {birthdays.map(id => (
                <li key={id}>
                    <Emoji symbol="🎂" />
                    <Link to={buildRoute.individual(id)}>
                        {individuals[id].name}
                    </Link>
                </li>
            ))}
            {lastPrayed.map(id => (
                <li key={id}>
                    <Emoji symbol="⏳" />
                    <Link to={buildRoute.individual(id)}>
                        {individuals[id].name}
                    </Link>
                </li>
            ))}
        </ol>
    )
}

export default Recommendations
