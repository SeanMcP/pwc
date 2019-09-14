import React from 'react'
import { Link } from '@reach/router'

function ButtonLink({ children, to, ...props }) {
    return (
        <Link to={to}>
            <button {...props}>{children}</button>
        </Link>
    )
}

export default ButtonLink
