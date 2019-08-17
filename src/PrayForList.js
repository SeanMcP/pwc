import React from 'react'
import Emoji from 'a11y-react-emoji'
import { Link } from '@reach/router'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'

function PrayForList({ ids, type, symbol }) {
    const [state, { recordPrayer }] = useIndividuals()
    return (
        <div className="PrayForList">
            <ol>
                {ids.map(id => {
                    const individual = state[id]
                    return (
                        <li key={`${type}-${id}`}>
                            <Emoji symbol={symbol} />
                            <Link to={buildRoute.individual(id)}>
                                {individual.name}
                            </Link>
                            <button onClick={() => recordPrayer(id)}>
                                <Emoji symbol="🙏" label="Record prayer" />
                            </button>
                            {/* Include dismiss icon */}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default PrayForList
