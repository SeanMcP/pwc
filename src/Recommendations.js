import React from 'react'
import Emoji from 'a11y-react-emoji'
import useLocalStorage from './useLocalStorage'

function Recommendations() {
    const [state, { getPrayerRecommendations }] = useLocalStorage()
    const { birthdays, lastPrayed } = getPrayerRecommendations(2)
    return (
        <ol>
            {birthdays.map(id => (
                <li key={id}>
                    <Emoji symbol="🎂" />
                    {state[id].name}
                </li>
            ))}
            {lastPrayed.map(id => (
                <li key={id}>
                    <Emoji symbol="⏳" />
                    {state[id].name}
                </li>
            ))}
        </ol>
    )
}

export default Recommendations
