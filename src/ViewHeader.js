import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import { H1 } from 'Headings'

function ViewHeader({ appName, title }) {
    return (
        <Pane is="header" marginBottom={majorScale(2)}>
            <H1>{title || appName}</H1>
        </Pane>
    )
}

export default ViewHeader
