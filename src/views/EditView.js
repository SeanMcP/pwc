import React from 'react'
import { navigate } from '@reach/router'
import dayjs from 'dayjs'
import { useItems } from 'store/useItems'
import ROUTES, { buildRoute } from 'constants/routes'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import { Form, FormFooter } from 'components/Form/Form'
import * as ItemFields from 'components/Form/ItemFields'
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
        const { date, name, notes } = values

        edit(props.id, {
            date,
            name,
            notes,
        })

        navigate(buildRoute.item(props.id))
    }

    return (
        <ViewContainer title="Edit" backTo={buildRoute.item(props.id)}>
            <Formik
                initialValues={defaultValues({
                    [FIELDS.date]: dayjs(data.date).format('YYYY-MM-DD') || '',
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
                            <Button
                                disabled={!dirty}
                                type="button"
                                onClick={handleDelete}
                            >
                                Remove
                            </Button>
                        </FormFooter>
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
