import React from 'react'
import Button from 'components/Button/Button'
import Icon from 'components/Icon/Icon'

function IconButton({
    children,
    fill = false,
    icon,
    label,
    modifiers = [],
    ...props
}) {
    return (
        <Button
            aria-label={label}
            modifiers={['with-icon', fill && 'with-fill', ...modifiers]}
            {...props}
        >
            <Icon block icon={icon} />
            {children}
        </Button>
    )
}

export default IconButton
