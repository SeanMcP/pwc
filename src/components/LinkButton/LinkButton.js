import React from 'react'
import clb from 'class-list-builder'
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
            className={clb('LinkButton', className, full && 'LinkButton--full')}
            {...props}
            icon={icon}
            to={to}
        >
            {children}
        </ButtonTag>
    )
}

export default LinkButton
