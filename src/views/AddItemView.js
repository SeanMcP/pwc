import React from 'react'
import { navigate } from '@reach/router'
import { Formik } from 'formik'
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
import { FIELDS, initialValues, validationSchema } from 'schemas/item'

function AddItemView({ type }) {
    const [, { add }] = useItems()

    function onSubmit(values) {
        const { date, dateType, name, notes } = values

        add({
            date,
            dateType: date ? dateType : null,
            name,
            notes,
            type
        })

        navigate(ROUTES.list)
    }

    return (
        <ViewContainer
            backTo={ROUTES.add}
            title={`Add ${ITEMS.types[type].display}`}
        >
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputField label="Name" name={FIELDS.name} autoFocus />
                        <InputField
                            label="Special date"
                            name={FIELDS.date}
                            type="date"
                        />
                        <SelectField label="Date type" name={FIELDS.dateType}>
                            {['Birthday', 'Anniversary', 'Memorial'].map(
                                option => (
                                    <option
                                        key={option}
                                        value={option.toLowerCase()}
                                    >
                                        {option}
                                    </option>
                                )
                            )}
                        </SelectField>
                        <TextareaField label="Notes" name={FIELDS.notes} />
                        <Button>Add</Button>
                    </Form>
                )}
            </Formik>
        </ViewContainer>
    )
}

export default AddItemView
