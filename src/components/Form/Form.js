import React from 'react'
import classList from '@seanmcp/class-list'

import './Form.scss'

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
            {label && (
                <label
                    className={`Field__label ${className}__label`}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            {description && (
                <small
                    className={`Field__description ${className}__description`}
                    id={descriptionId}
                >
                    {description}
                </small>
            )}
            <Element
                className={`Field__input ${className}__input`}
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

export function SearchField(props) {
    return (
        <FieldFactory
            aria-label="Search"
            element="input"
            type="search"
            {...props}
        />
    )
}

export function TextareaField(props) {
    return <FieldFactory element="textarea" {...props} />
}

export function Form({ className, props }) {
    return <form classList={classList('Form', className)} {...props} />
}
