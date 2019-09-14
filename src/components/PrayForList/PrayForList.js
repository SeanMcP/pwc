import React from 'react'
import Emoji from 'a11y-react-emoji'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import AppLink from 'components/AppLink/AppLink'
import './PrayForList.scss'

function PrayForList({ ids, symbol, title }) {
    const [state, { recordPrayer }] = useIndividuals()

    if (ids.length === 0) return null

    const type = title.toLowerCase().replace(/ /g, '-')

    const list = ids.map(id => {
        const individual = state[id]
        return (
            <li className="PrayForList__item" key={`${type}-${id}`}>
                <AppLink
                    className="PrayForList__link"
                    to={buildRoute.individual(id)}
                >
                    {individual.name}
                </AppLink>
                <button
                    className="PrayForList__record-button"
                    onClick={() => recordPrayer(id)}
                >
                    Record prayer
                    {/* <Emoji symbol="✔️" /> */}
                </button>
                {/* Include dismiss icon */}
            </li>
        )
    })

    return (
        <div className="PrayForList">
            <header className="PrayForList__header">
                <Emoji symbol={symbol} />
                <h3 className="PrayForList__heading">{title}</h3>
            </header>
            <ul className="PrayForList__list">{list}</ul>
        </div>
    )
}

export default PrayForList
