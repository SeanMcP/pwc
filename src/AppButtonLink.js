import React from 'react'
import { Link as ReachLink } from '@reach/router'
import { Button, Pane } from 'evergreen-ui'

function AppButtonLink({ color, children, iconAfter, iconBefore, ...props }) {
    return (
        <ReachLink {...props}>
            <Pane display="inline-flex" alignItems="center">
                <Button
                    color={color}
                    iconAfter={iconAfter}
                    iconBefore={iconBefore}
                >
                    {children}
                </Button>
            </Pane>
        </ReachLink>
    )
}

export default AppButtonLink
