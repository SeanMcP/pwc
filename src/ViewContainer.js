import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import ViewHeader from 'ViewHeader'

const appName = 'PWC'

function ViewContainer({ children, hideHeader, title }) {
    React.useEffect(() => {
        document.title = title ? `${title} - ${appName}` : appName
    }, [title])
    return (
        <Pane padding={majorScale(2)}>
            {!hideHeader && <ViewHeader appName={appName} title={title} />}
            {children}
        </Pane>
    )
}

export default ViewContainer
