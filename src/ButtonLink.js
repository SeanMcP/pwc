import React from 'react'
import AppLink from 'AppLink'

function ButtonLink({ children, to, ...props }) {
    return (
        <AppLink to={to}>
            <button {...props}>{children}</button>
        </AppLink>
    )
}

export default ButtonLink
