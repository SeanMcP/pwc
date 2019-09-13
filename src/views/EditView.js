import React from 'react'
import day from 'dayjs'
import { useIndividuals } from 'store/useIndividuals'
import { navigate } from '@reach/router'
import ROUTES, { buildRoute } from 'constants/routes'
import ViewContainer from 'ViewContainer'
import { Button, TextInputField } from 'evergreen-ui'
import { TextareaField } from 'Forms'

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
                <TextInputField
                    label="Name"
                    name="name"
                    defaultValue={data.name}
                    required
                />
                <TextInputField
                    label="Birthday"
                    name="birthday"
                    type="date"
                    defaultValue={
                        day(data.birthday).format('YYYY-MM-DD') || null
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
                <Button appearance="primary" iconBefore="save">
                    Save changes
                </Button>
                <Button intent="danger" type="button" onClick={handleDelete}>
                    Remove
                </Button>
            </form>
            {process.env.NODE_ENV === 'development' && (
                <Button onClick={() => DEV.___DEV___setBirthday(props.id)}>
                    Set birthday to today
                </Button>
            )}
        </ViewContainer>
    )
}

export default EditView
