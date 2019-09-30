import React from 'react'
import { navigate } from '@reach/router'
import dayjs from 'dayjs'
import { useIndividuals } from 'store/useIndividuals'
import ROUTES, { buildRoute } from 'constants/routes'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import { InputField, TextareaField } from 'components/Form/Form'

function EditView(props) {
    const [, { edit, get, remove }, DEV] = useIndividuals()
    const [validationErrors, setValidationErrors] = React.useState([])
    const data = get(props.id)
    if (!data) {
        return null
    }
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
    return (
        <ViewContainer title="Edit" backTo={buildRoute.individual(props.id)}>
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
                <InputField
                    label="Name"
                    name="name"
                    defaultValue={data.name}
                    required
                />
                <InputField
                    label="Birthday"
                    name="birthday"
                    type="date"
                    defaultValue={
                        dayjs(data.birthday).format('YYYY-MM-DD') || null
                    }
                />
                <TextareaField
                    label="Notes"
                    name="notes"
                    defaultValue={data.notes}
                />
                {process.env.NODE_ENV === 'development' && (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                )}
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
        </ViewContainer>
    )
}

export default EditView
