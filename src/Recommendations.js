import React from 'react'
import Emoji from 'a11y-react-emoji'
import { useLocalStorage } from './useLocalStorage'
import { Link } from '@reach/router'

function Recommendations({ count = 5 }) {
    const [neighbors, { getPrayerRecommendations }] = useLocalStorage()
    const { birthdays, lastPrayed } = getPrayerRecommendations(count)
    return (
        <ol>
            {birthdays.map(id => (
                <li key={id}>
                    <Emoji symbol="🎂" />
                    <Link to={`/neighbor/${id}`}>{neighbors[id].name}</Link>
                </li>
            ))}
            {lastPrayed.map(id => (
                <li key={id}>
                    <Emoji symbol="⏳" />
                    <Link to={`/neighbor/${id}`}>{neighbors[id].name}</Link>
                </li>
            ))}
        </ol>
    )
}

export default Recommendations
