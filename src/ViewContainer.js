import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import ViewHeader from 'ViewHeader'
import ViewContent from 'ViewContent'

const appName = 'PWC'

function ViewContainer({ backTo, children, hideHeader, title }) {
    React.useEffect(() => {
        document.title = title ? `${title} - ${appName}` : appName
    }, [title])
    return (
        <Pane padding={majorScale(2)}>
            {!hideHeader && (
                <ViewHeader appName={appName} backTo={backTo} title={title} />
            )}
            <ViewContent>{children}</ViewContent>
        </Pane>
    )
}

export default ViewContainer
