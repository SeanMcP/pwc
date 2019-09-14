import React from 'react'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import useSettings from 'store/useSettings'
import { InputField } from 'Form'

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
            <form onSubmit={handleSubmit}>
                <InputField
                    description="Default is three"
                    label="Number of recommendations"
                    name="recommendationCount"
                    type="number"
                    defaultValue={settings.recommendationCount}
                    required
                />
                <button>Save</button>
                <button type="reset">Reset</button>
            </form>
        </ViewContainer>
    )
}

export default SettingsView
