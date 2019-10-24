import React from 'react'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import useSettings from 'store/useSettings'
import { Form, InputField } from 'components/Form/Form'
import Button from 'components/Button/Button'

function SettingsView(props) {
    const [settings, { setAll }] = useSettings()
    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const recommendationCount = formData.get('recommendationCount')
        if (recommendationCount) {
            setAll({ recommendationCount })
        }
    }
    return (
        <ViewContainer title="Settings">
            <Form onSubmit={handleSubmit}>
                <InputField
                    description="Default is three"
                    label="Number of recommendations"
                    name="recommendationCount"
                    type="number"
                    defaultValue={settings.recommendationCount}
                    required
                />
                <footer>
                    <Button modifier={['primary']}>Save</Button>
                    <Button type="reset">Reset</Button>
                </footer>
            </Form>
        </ViewContainer>
    )
}

export default SettingsView
