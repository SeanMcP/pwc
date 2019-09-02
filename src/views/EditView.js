import React from 'react'
import day from 'dayjs'
import { useIndividuals } from 'store/useIndividuals'
import { Link, navigate } from '@reach/router'
import ROUTES, { buildRoute } from 'constants/routes'

function EditView(props) {
    const [, { edit, get, remove }, DEV] = useIndividuals()
    const [validationErrors, setValidationErrors] = React.useState([])
    const data = get(props.id)
    function handleDelete() {
        remove(props.id)
        navigate(ROUTES.all)
    }
    function handleSave(e) {
        e.preventDefault()
        setValidationErrors([])

        const formData = new FormData(e.target)
        const name = formData.get('name'),
            birthday = formData.get('birthday'),
            notes = formData.get('notes')

        if (!name) {
            setValidationErrors([...validationErrors, 'Name is required'])
        }

        if (validationErrors.length === 0) {
            edit(props.id, {
                name,
                birthday,
                notes
            })
        }
    }
    console.log('validationErrors', validationErrors)
    return (
        <div className="EditView">
            <Link to={buildRoute.individual(props.id)}>Back</Link>
            <h1>Edit</h1>
            <form
                onSubmit={handleSave}
                className={validationErrors.length && '--error'}
            >
                {validationErrors.length > 0 &&
                    validationErrors.map((error, i) => (
                        <p key={`error-${i}`} className="Error">
                            {error}
                        </p>
                    ))}
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
                <button>Save changes</button>
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
