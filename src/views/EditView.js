import React from 'react'
import dayjs from 'dayjs'
import { Formik } from 'formik'
import { navigate } from '@reach/router'

import { useItems } from 'store/useItems'
import ROUTES, { buildRoute } from 'constants/routes'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import { Form, FormFooter } from 'components/Form/Form'
import * as ItemFields from 'components/Form/ItemFields'
import Button from 'components/Button/Button'
import { FIELDS, defaultValues, validationSchema } from 'schemas/item'
import DevOnly from 'components/DevOnly/DevOnly'

function EditView(props) {
    const [, { edit, get, remove }, __DEV__] = useItems()

    const data = get(props.id)

    if (!data) {
        return null
    }

    function handleDelete() {
        remove(props.id)
        navigate(ROUTES.list)
    }

    function onSubmit(values) {
        const { day, month, name, notes } = values

        edit(props.id, {
            day,
            month,
            name,
            notes,
        })

        navigate(buildRoute.item(props.id))
    }
    const date = dayjs(data.date)

    return (
        <ViewContainer title="Edit" backTo={buildRoute.item(props.id)}>
            <Formik
                initialValues={defaultValues({
                    [FIELDS.day]: date.date() || '',
                    [FIELDS.month]: date.month() || '',
                    [FIELDS.name]: data.name,
                    [FIELDS.notes]: data.notes,
                })}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ dirty, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <ItemFields.Name />
                        <ItemFields.Date />
                        <ItemFields.Notes />
                        {false && process.env.NODE_ENV === 'development' && (
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        )}
                        <FormFooter>
                            <Button disabled={!dirty} type="submit" primary>
                                Save
                            </Button>
                            <Button type="button" onClick={handleDelete}>
                                Remove
                            </Button>
                        </FormFooter>
                    </Form>
                )}
            </Formik>
            <DevOnly off>
                <Button onClick={() => __DEV__.setBirthday(props.id)}>
                    Set birthday to today
                </Button>
            </DevOnly>
        </ViewContainer>
    )
}

export default EditView
