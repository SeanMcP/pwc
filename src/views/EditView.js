import React from 'react'
import { navigate } from '@reach/router'
import dayjs from 'dayjs'
import { useItems } from 'store/useItems'
import ROUTES, { buildRoute } from 'constants/routes'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import {
    Form,
    InputField,
    TextareaField,
    SelectField
} from 'components/Form/Form'
import Button from 'components/Button/Button'
import { FIELDS, defaultValues, validationSchema } from 'schemas/item'
import { Formik } from 'formik'

function EditView(props) {
    const [, { edit, get, remove }, DEV] = useItems()

    const data = get(props.id)

    if (!data) {
        return null
    }

    function handleDelete() {
        remove(props.id)
        navigate(ROUTES.list)
    }

    function onSubmit(values) {
        const { date, dateType, name, notes } = values

        edit(props.id, {
            date,
            dateType,
            name,
            notes
        })

        navigate(buildRoute.item(props.id))
    }

    return (
        <ViewContainer title="Edit" backTo={buildRoute.item(props.id)}>
            <Formik
                initialValues={defaultValues({
                    [FIELDS.date]: dayjs(data.date).format('YYYY-MM-DD') || '',
                    [FIELDS.dateType]: data.dateType,
                    [FIELDS.name]: data.name,
                    [FIELDS.notes]: data.notes
                })}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputField label="Name" name={FIELDS.name} />
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
                        {false && process.env.NODE_ENV === 'development' && (
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        )}
                        <Button>Save changes</Button>
                        <Button type="button" onClick={handleDelete}>
                            Remove
                        </Button>
                    </Form>
                )}
            </Formik>
            {false && process.env.NODE_ENV === 'development' && (
                <Button onClick={() => DEV.___DEV___setBirthday(props.id)}>
                    Set birthday to today
                </Button>
            )}
        </ViewContainer>
    )
}

export default EditView
