import React from 'react'
import classList from '@seanmcp/class-list'
import AppLink from 'components/AppLink/AppLink'
import Button from 'components/Button/Button'

import './ButtonLink.scss'

function ButtonLink({ children, className, full = false, to, ...props }) {
    return (
        <AppLink
            className={classList(
                'ButtonLink',
                className,
                full && 'ButtonLink--full'
            )}
            to={to}
        >
            <Button {...props} tabIndex="-1">
                {children}
            </Button>
        </AppLink>
    )
}

export default ButtonLink
