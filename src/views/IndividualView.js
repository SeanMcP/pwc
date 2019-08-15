import React from 'react'
import { navigate } from '@reach/router'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'

function IndividualView(props) {
    const [, { get, remove }] = useIndividuals()
    const data = get(props.id)
    function handleDelete() {
        remove(props.id)
        navigate(ROUTES.all)
    }
    return (
        <div className="IndividualView">
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default IndividualView
