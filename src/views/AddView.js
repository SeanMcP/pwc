import React from 'react'
import { navigate } from '@reach/router'
import { Button, TextInputField, majorScale } from 'evergreen-ui'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'
import { H1 } from 'Headings'
import { TextareaField } from 'Forms'

function AddView() {
    const [, { add }] = useIndividuals()
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const name = formData.get('name'),
            birthday = formData.get('birthday'),
            notes = formData.get('notes')
        if (name) {
            add({ name, birthday, notes })
            form.reset()
            navigate(ROUTES.all)
        }
    }
    return (
        <ViewContainer title="Add">
            <H1 marginBottom={majorScale(2)}>Add</H1>
            <form onSubmit={handleSubmit}>
                <TextInputField label="Name" name="name" required />
                <TextInputField label="Birthday" name="birthday" type="date" />
                <TextareaField label="Notes" name="notes" />
                <Button
                    appearance="primary"
                    iconBefore="add"
                    marginTop={majorScale(3)}
                >
                    Add
                </Button>
            </form>
        </ViewContainer>
    )
}

export default AddView
