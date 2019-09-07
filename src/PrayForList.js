import React from 'react'
import Emoji from 'a11y-react-emoji'
import { Link } from '@reach/router'
import { Button } from 'evergreen-ui'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'

function PrayForList({ ids, type, symbol }) {
    const [state, { recordPrayer }] = useIndividuals()
    const list = ids.map(id => {
        const individual = state[id]
        return (
            <li key={`${type}-${id}`}>
                <Emoji symbol={symbol} />
                <Link to={buildRoute.individual(id)}>{individual.name}</Link>
                <Button onClick={() => recordPrayer(id)}>
                    <Emoji symbol="🙏" label="Record prayer" />
                </Button>
                {/* Include dismiss icon */}
            </li>
        )
    })
    if (list.length === 0) return null
    return (
        <div className="PrayForList">
            <h3>{type}</h3>
            <ol>{list}</ol>
        </div>
    )
}

export default PrayForList
