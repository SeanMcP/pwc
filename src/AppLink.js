import React from 'react'
import { Link } from '@reach/router'
import classList from '@seanmcp/class-list'

function AppLink({ children, className, ...props }) {
    return (
        <Link className={classList('AppLink', className)} {...props}>
            {children}
        </Link>
    )
}

export default AppLink
