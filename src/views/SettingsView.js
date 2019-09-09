import React from 'react'
import ViewContainer from 'ViewContainer'
import useSettings from 'store/useSettings'
import { TextInputField, Button } from 'evergreen-ui'
import { H1 } from 'Headings'

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
            <H1>Settings</H1>
            <form onSubmit={handleSubmit}>
                <TextInputField
                    description="Default is three"
                    label="Number of recommendations"
                    name="recommendationCount"
                    type="number"
                    defaultValue={settings.recommendationCount}
                    required
                />
                <Button appearance="primary">Save</Button>
                <Button type="reset">Reset</Button>
            </form>
        </ViewContainer>
    )
}

export default SettingsView
