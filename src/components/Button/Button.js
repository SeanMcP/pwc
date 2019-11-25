import React from 'react'
import classList from '@seanmcp/class-list'

import './Button.scss'

/*
    Enumerated modifiers:
    - primary
*/

function Button({
    as = 'button',
    children,
    className,
    modifiers = [],
    primary = false,
    ...props
}) {
    const Tag = as
    const modifierClasses = modifiers.reduce((acc, mod) => {
        if (Boolean(mod)) {
            acc.push(`Button--${mod}`)
        }
        return acc
    }, [])

    return (
        <Tag
            className={classList(
                'Button',
                props.type && `Button--${props.type}`,
                primary && 'Button--primary',
                ...modifierClasses,
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    )
}

export default Button
