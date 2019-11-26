import React from 'react'
import clb from 'class-list-builder'
import AppLink from 'components/AppLink/AppLink'

function NavLink({ className, ...props }) {
    return (
        <AppLink
            className={clb('NavLink', className)}
            getProps={({ isCurrent }) => ({
                'aria-current': isCurrent || undefined,
            })}
            {...props}
        />
    )
}

export default NavLink
