import React from 'react'
import Emoji from 'a11y-react-emoji'

function Recommendations({ birthdays, lastPrayed, neighbors }) {
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
