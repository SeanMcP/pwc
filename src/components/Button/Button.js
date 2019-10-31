import React from 'react'
import classList from '@seanmcp/class-list'

import './Button.scss'

/*
    Modifiers:
    - primary
*/

function Button({
    children,
    className,
    modifiers = [],
    primary = false,
    ...props
}) {
    const fullModifiers = modifiers.reduce((acc, mod) => {
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
                className,
                ...fullModifiers
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
