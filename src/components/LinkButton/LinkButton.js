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
        <ButtonTag
            as={AppLink}
            className={classList(
                'LinkButton',
                className,
                full && 'LinkButton--full'
            )}
            {...props}
            icon={icon}
            to={to}
        >
            {children}
        </ButtonTag>
    )
}

export default LinkButton
