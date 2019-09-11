import React from 'react'
import { Pane, majorScale, BackButton } from 'evergreen-ui'
import { H1 } from 'Headings'
import ViewContent from 'ViewContent'

function ViewHeader({ appName, title }) {
    return (
        <Pane is="header" marginBottom={majorScale(2)}>
            <ViewContent>
                {window.location.pathname !== '/' && <BackButton />}
                <H1>{title || appName}</H1>
            </ViewContent>
        </Pane>
    )
}

export default ViewHeader
