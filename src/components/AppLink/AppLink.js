import React from 'react'
import { Link } from '@reach/router'
import clb from 'class-list-builder'
import './AppLink.scss'

function AppLink({ children, className, ...props }) {
    return (
        <Link className={clb('AppLink', className)} {...props}>
            {children}
        </Link>
    )
}

export default AppLink
