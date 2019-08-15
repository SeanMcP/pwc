import React from 'react'
import { navigate } from '@reach/router'
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
                <label htmlFor="neighbor-input">Neighbor</label>
                <input id="neighbor-input" name="name" type="text" />
                <label htmlFor="neighbor-birthday">Birthday</label>
                <input id="neighbor-birthday" name="birthday" type="date" />
                <label htmlFor="neighbor-notes">Notes</label>
                <textarea id="neighbor-notes" name="notes" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddView
