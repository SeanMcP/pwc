import React from 'react'
import AppLink from 'components/AppLink/AppLink'
import Button from 'components/Button/Button'

function ButtonLink({ children, to, ...props }) {
    return (
        <AppLink className="ButtonLink" to={to}>
            <Button {...props}>{children}</Button>
        </AppLink>
    )
}

export default ButtonLink
