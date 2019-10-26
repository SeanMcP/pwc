import React from 'react'
import { navigate } from '@reach/router'
import ROUTES from 'constants/routes'
import { useItems } from 'store/useItems'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import {
    Form,
    InputField,
    TextareaField,
    SelectField
} from 'components/Form/Form'
import Button from 'components/Button/Button'
import ITEMS from 'constants/items'

function AddItemView({ type }) {
    const [, { add }] = useItems()
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const name = formData.get('name'),
            date = formData.get('date'),
            dateType = formData.get('dateType'),
            notes = formData.get('notes')
        if (name) {
            add({ date, dateType: date ? dateType : null, name, notes, type })
            form.reset()
            navigate(ROUTES.all)
        }
    }
    return (
        <ViewContainer
            backTo={ROUTES.add}
            title={`Add ${ITEMS.types[type].display}`}
        >
            <Form onSubmit={handleSubmit}>
                <InputField label="Name" name="name" autoFocus />
                <InputField label="Important date" name="date" type="date" />
                <SelectField label="Date type" name="dateType">
                    {['Birthday', 'Anniversary', 'Memorial'].map(option => (
                        <option key={option} value={option.toLowerCase()}>
                            {option}
                        </option>
                    ))}
                </SelectField>
                <TextareaField label="Notes" name="notes" />
                <Button>Add</Button>
            </Form>
        </ViewContainer>
    )
}

export default AddItemView
