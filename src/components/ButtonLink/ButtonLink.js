import React from 'react'
import AppLink from 'components/AppLink/AppLink'

function ButtonLink({ children, to, ...props }) {
    return (
        <AppLink to={to}>
            <button {...props}>{children}</button>
        </AppLink>
    )
}

export default ButtonLink
