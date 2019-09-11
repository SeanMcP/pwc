import React from 'react'
import { Pane } from 'evergreen-ui'

function ViewContent({ children, ...props }) {
    return (
        <Pane marginLeft="auto" marginRight="auto" maxWidth="600px" {...props}>
            {children}
        </Pane>
    )
}

export default ViewContent
