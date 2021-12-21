import React from 'react'
import { navigate } from '@reach/router'
import { Formik } from 'formik'
import ROUTES from 'constants/routes'
import { useItems } from 'store/useItems'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import { Form, FormFooter } from 'components/Form/Form'
import Button from 'components/Button/Button'
import ITEMS from 'constants/items'
import * as ItemFields from 'components/Form/ItemFields'
import { initialValues, validationSchema } from 'schemas/item'
import useItemsV2 from 'store/useItemsV2'
import { getSpecialDateFromDayAndMonth } from 'utils/date-utils'

function AddItemView({ type }) {
    const [, { add }] = useItems()
    const [, v2Actions] = useItemsV2()

    async function onSubmit(values) {
        const { day, month, name, notes } = values

        add({
            day,
            month,
            name,
            notes,
            type,
        })

        await v2Actions.add({
            name,
            notes,
            specialDate: getSpecialDateFromDayAndMonth(day, month),
            type,
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
                {({ dirty, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <ItemFields.Name autoFocus />
                        <ItemFields.Date />
                        <ItemFields.Notes />
                        <FormFooter>
                            <Button disabled={!dirty} type="submit" primary>
                                Add
                            </Button>
                            <Button disabled={!dirty} type="reset">
                                Reset
                            </Button>
                        </FormFooter>
                    </Form>
                )}
            </Formik>
        </ViewContainer>
    )
}

export default AddItemView
