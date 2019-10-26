import React from 'react'
import Emoji from 'a11y-react-emoji'
import { buildRoute } from 'constants/routes'
import { useItems } from 'store/useItems'
import AppLink from 'components/AppLink/AppLink'
import './RecommendationsList.scss'
import Button from 'components/Button/Button'

function RecommendationsList({ ids, symbol, title }) {
    const [state, { recordPrayer }] = useItems()

    if (ids.length === 0) return null

    const type = title.toLowerCase().replace(/ /g, '-')

    const list = ids.map(id => {
        const item = state[id]
        return (
            <li className="RecommendationsList__item" key={`${type}-${id}`}>
                <AppLink
                    className="RecommendationsList__link"
                    to={buildRoute.item(id)}
                >
                    {item.name}
                </AppLink>
                <Button
                    className="RecommendationsList__record-button"
                    onClick={() => recordPrayer(id)}
                >
                    Record prayer
                    {/* <Emoji symbol="✔️" /> */}
                </Button>
                {/* Include dismiss icon */}
            </li>
        )
    })

    return (
        <div className="RecommendationsList">
            <header className="RecommendationsList__header">
                <Emoji symbol={symbol} />
                <h3 className="RecommendationsList__heading">{title}</h3>
            </header>
            <ul className="RecommendationsList__list">{list}</ul>
        </div>
    )
}

export default RecommendationsList
