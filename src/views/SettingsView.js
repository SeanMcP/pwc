import React from 'react'
import { Formik } from 'formik'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import useSettings from 'store/useSettings'
import { Form, InputField, FormFooter, SelectField } from 'components/Form/Form'
import Button from 'components/Button/Button'
import { FIELDS, defaultValues, validationSchema } from 'schemas/settings'

function SettingsView() {
    const [settings, { setAll }] = useSettings()

    function onSubmit(values) {
        setAll(values)
    }

    return (
        <ViewContainer title="Settings">
            <Formik
                enableReinitialize
                initialValues={defaultValues({
                    [FIELDS.listView]: settings.listView,
                    [FIELDS.recommendationCount]: settings.recommendationCount,
                })}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ dirty, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            description="Default is three"
                            label="Number of recommendations"
                            name="recommendationCount"
                            type="number"
                        />
                        <SelectField
                            label="List view preference"
                            name="listView"
                        >
                            {['All', 'By Type'].map((option) => (
                                <option
                                    key={option}
                                    value={option.replace(/ /g, '')}
                                >
                                    {option}
                                </option>
                            ))}
                        </SelectField>
                        <FormFooter>
                            <Button disabled={!dirty} primary type="submit">
                                Save
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

export default SettingsView
