import React from 'react'
import { navigate } from '@reach/router'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import Emoji from 'a11y-react-emoji'

function IndividualView(props) {
    const [, { get, remove }] = useIndividuals()
    const data = get(props.id)
    function handleDelete() {
        remove(props.id)
        navigate(ROUTES.all)
    }
    function formatBirthday() {
        const date = new Date(data.birthday)
        return date.getMonth() + '/' + date.getDate()
    }
    function formatLastPrayed() {
        const date = new Date(data.lastPrayed)
        return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
    }
    return (
        <div className="IndividualView">
            <header>
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
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default IndividualView
