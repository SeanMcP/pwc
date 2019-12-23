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
                    [FIELDS.includeFavorites]: settings.includeFavorites,
                    [FIELDS.listView]: settings.listView,
                    [FIELDS.mode]: settings.mode,
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
                            name={FIELDS.recommendationCount}
                            type="number"
                        />
                        <SelectField
                            description="Include or exclude favorites from count"
                            label="Favorites in recommendations"
                            name={FIELDS.includeFavorites}
                        >
                            <option value="true">Include in count</option>
                            <option value="false">Exclude from count</option>
                        </SelectField>
                        <SelectField
                            label="List view preference"
                            name={FIELDS.listView}
                        >
                            <option value="All">All</option>
                            <option value="ByType">By Type</option>
                        </SelectField>
                        <SelectField
                            description="Change the appearance of the app"
                            label="Mode"
                            name={FIELDS.mode}
                        >
                            {['light', 'dark'].map((option) => (
                                <option key={option} value={option}>
                                    {option[0].toUpperCase() + option.slice(1)}
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
