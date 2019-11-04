import React from 'react'
import classList from '@seanmcp/class-list'
import AppLink from 'components/AppLink/AppLink'

import './LinkButton.scss'

function LinkButton({
    children,
    className,
    full = false,
    icon = null,
    to,
    ...props
}) {
    const ButtonTag = require(`components/${
        icon ? 'IconButton/IconButton' : 'Button/Button'
    }`).default
    return (
        <AppLink
            className={classList(
                'LinkButton',
                className,
                full && 'LinkButton--full'
            )}
            to={to}
        >
            <ButtonTag {...props} icon={icon} tabIndex="-1">
                {children}
            </ButtonTag>
        </AppLink>
    )
}

export default LinkButton
