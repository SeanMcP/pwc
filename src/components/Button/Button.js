import React from 'react'
import classList from '@seanmcp/class-list'

import './Button.scss'

/*
    Enumerated modifiers:
    - primary
*/

function Button({
    children,
    className,
    modifiers = [],
    primary = false,
    ...props
}) {
    const modifierClasses = modifiers.reduce((acc, mod) => {
        if (Boolean(mod)) {
            acc.push(`Button--${mod}`)
        }
        return acc
    }, [])

    return (
        <button
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
        </button>
    )
}

export default Button
