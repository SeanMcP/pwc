import React from 'react'
import { Link as ReachLink } from '@reach/router'
import { Icon, Link as EvergreenLink, Pane } from 'evergreen-ui'
import { minorScale } from 'evergreen-ui/commonjs/scales'

function AppLink({ color, children, iconAfter, iconBefore, ...props }) {
    return (
        <ReachLink {...props}>
            <Pane display="inline-flex" alignItems="center">
                {iconBefore && (
                    <Icon icon={iconBefore} marginRight={minorScale(1)} />
                )}
                <EvergreenLink is="span" color={color}>
                    {children}
                </EvergreenLink>
                {iconAfter && (
                    <Icon icon={iconAfter} marginRight={minorScale(1)} />
                )}
            </Pane>
        </ReachLink>
    )
}

export default AppLink
