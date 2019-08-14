import React from 'react'
import Emoji from 'a11y-react-emoji'
import { useLocalStorage } from './useLocalStorage'

function Recommendations({ count = 5 }) {
    const [neighbors, { getPrayerRecommendations }] = useLocalStorage()
    const { birthdays, lastPrayed } = getPrayerRecommendations(count)
    return (
        <ol>
            {birthdays.map(id => (
                <li key={id}>
                    <Emoji symbol="🎂" />
                    {neighbors[id].name}
                </li>
            ))}
            {lastPrayed.map(id => (
                <li key={id}>
                    <Emoji symbol="⏳" />
                    {neighbors[id].name}
                </li>
            ))}
        </ol>
    )
}

export default Recommendations
