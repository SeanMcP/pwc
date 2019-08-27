import React from 'react'
import day from 'dayjs'
import { useIndividuals } from 'store/useIndividuals'
import { Link, navigate } from '@reach/router'
import ROUTES, { buildRoute } from 'constants/routes'

function EditView(props) {
    const [, { get, remove }, DEV] = useIndividuals()
    const data = get(props.id)
    function handleDelete() {
        remove(props.id)
        navigate(ROUTES.all)
    }
    return (
        <div className="EditView">
            <Link to={buildRoute.individual(props.id)}>Back</Link>
            <h1>Edit</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" defaultValue={data.name} />
                <label htmlFor="birthday">Birthday</label>
                <input
                    id="birthday"
                    name="birthday"
                    type="date"
                    defaultValue={day(data.birthday).format('YYYY-MM-DD')}
                />
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" defaultValue={data.notes} />
                <pre>{JSON.stringify(data, null, 2)}</pre>
                <button type="button" onClick={handleDelete}>
                    Remove
                </button>
            </form>
            {process.env.NODE_ENV === 'development' && (
                <button onClick={() => DEV.___DEV___setBirthday(props.id)}>
                    Set birthday to today
                </button>
            )}
        </div>
    )
}

export default EditView
