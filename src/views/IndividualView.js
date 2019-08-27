import React from 'react'
import { Link } from '@reach/router'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import Emoji from 'a11y-react-emoji'

function IndividualView(props) {
    const [, { get, recordPrayer }] = useIndividuals()
    const data = get(props.id)
    function formatBirthday() {
        const date = new Date(data.birthday)
        return date.getMonth() + 1 + '/' + date.getDate()
    }
    function formatLastPrayed() {
        const date = new Date(data.lastPrayed)
        return (
            date.getMonth() +
            1 +
            '/' +
            date.getDate() +
            '/' +
            date.getFullYear()
        )
    }
    return (
        <div className="IndividualView">
            <header>
                <Link to={buildRoute.edit(props.id)}>Edit</Link>
                <h1>{data.name}</h1>
                <section>
                    <div>
                        <Emoji symbol="🙏" />
                        <span>{formatLastPrayed()}</span>
                    </div>
                    <div>
                        <Emoji symbol="🎂" />
                        <span>{formatBirthday()}</span>
                    </div>
                </section>
            </header>
            <h2>Notes</h2>
            <p>{data.notes}</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={() => recordPrayer(props.id)}>
                Record prayer
            </button>
        </div>
    )
}

export default IndividualView
