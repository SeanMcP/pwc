import React from 'react'
import Emoji from 'a11y-react-emoji'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import AppLink from 'AppLink'

function PrayForList({ ids, symbol, title }) {
    const [state, { recordPrayer }] = useIndividuals()

    if (ids.length === 0) return null

    const type = title.toLowerCase().replace(/ /g, '-')

    const list = ids.map(id => {
        const individual = state[id]
        return (
            <li key={`${type}-${id}`}>
                <AppLink to={buildRoute.individual(id)}>
                    {individual.name}
                </AppLink>
                <button
                    onClick={() => recordPrayer(id)}
                    aria-label="Record prayer"
                    icon="tick"
                >
                    <Emoji symbol="✔️" />
                </button>
                {/* Include dismiss icon */}
            </li>
        )
    })

    return (
        <div className="PrayForList">
            <div>
                <Emoji symbol={symbol} />
                <h2 style={{ display: 'inline' }}>{title}</h2>
            </div>
            <ol>{list}</ol>
        </div>
    )
}

export default PrayForList
