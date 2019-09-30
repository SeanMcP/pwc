import React from 'react'
import classList from '@seanmcp/class-list'

import './Button.scss'

function Button({ children, className, modifier, ...props }) {
    return (
        <button
            className={classList(
                'Button',
                props.type && `Button--${props.type}`,
                className,
                modifier && `Button--${modifier}`
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
