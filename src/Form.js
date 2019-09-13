import React from 'react'
import classList from '@seanmcp/class-list'

function FieldFactory({ description, element, error, label, ...props }) {
    const id = `${props.name}-${String(Math.random()).slice(-5)}`
    const descriptionId = description ? `${id}-description` : undefined
    const Element = element
    const className = `${element[0].toUpperCase() + element.slice(1)}Field`
    return (
        <div
            className={classList(
                'Field',
                className,
                error && `${className}--error`
            )}
        >
            <label className={`Field__label ${className}__label`} htmlFor={id}>
                {label}
            </label>
            {description && (
                <p
                    className={`Field__description ${className}__description`}
                    id={descriptionId}
                >
                    {description}
                </p>
            )}
            <Element
                className={`Field ${className}__field`}
                id={id}
                aria-describedby={descriptionId}
                {...props}
            />
            {error && (
                <p className={`Field__error ${className}__error`}>{error}</p>
            )}
        </div>
    )
}

export function InputField(props) {
    return <FieldFactory element="input" {...props} />
}

export function TextareaField(props) {
    return <FieldFactory element="textarea" {...props} />
}
