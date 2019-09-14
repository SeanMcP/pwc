import React from 'react'
import classList from '@seanmcp/class-list'
import AppLink from 'components/AppLink/AppLink'

function NavLink({ className, ...props }) {
    return (
        <AppLink
            className={classList('NavLink', className)}
            getProps={({ isCurrent }) => ({
                'aria-current': isCurrent || undefined
            })}
            {...props}
        />
    )
}

export default NavLink
