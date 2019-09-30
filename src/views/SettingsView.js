import React from 'react'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import useSettings from 'store/useSettings'
import { Form, InputField } from 'components/Form/Form'

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
            <h1>Settings</h1>
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
                    <button>Save</button>
                    <button type="reset">Reset</button>
                </footer>
            </Form>
        </ViewContainer>
    )
}

export default SettingsView
