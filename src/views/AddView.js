import React from 'react'
import { navigate } from '@reach/router'
import { Button, Label, Pane, Textarea, TextInputField } from 'evergreen-ui'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'

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
        <div className="AddView">
            <form onSubmit={handleSubmit}>
                <TextInputField label="Name" name="name" required />
                {/* <label htmlFor="neighbor-input">Neighbor</label>
                <input id="neighbor-input" name="name" type="text" /> */}
                <TextInputField label="Birthday" name="birthday" type="date" />
                {/* <label htmlFor="neighbor-birthday">Birthday</label>
                <input id="neighbor-birthday" name="birthday" type="date" /> */}
                <Pane>
                    <Label htmlFor="notes" marginBottom={4} display="block">
                        Notes
                    </Label>
                    <Textarea id="notes" name="notes" />
                </Pane>
                {/* <label htmlFor="neighbor-notes">Notes</label>
                <textarea id="neighbor-notes" name="notes" /> */}
                <Button marginTop={16}>Add</Button>
            </form>
        </div>
    )
}

export default AddView
