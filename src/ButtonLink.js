import React from 'react'
import { Link } from '@reach/router'
import { Button } from 'evergreen-ui'

function ButtonLink({ children, label, to, ...props }) {
    return (
        <Link to={to}>
            <Button {...props} aria-label={label}>
                {children}
            </Button>
        </Link>
    )
}

export default ButtonLink
