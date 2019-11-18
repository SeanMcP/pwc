import React from 'react'
import classList from '@seanmcp/class-list'
import { useField } from 'formik'
import Icon from 'components/Icon/Icon'

import './Form.scss'
import Grid from 'components/Grid/Grid'

function FieldFactory({
    description,
    element,
    field = {},
    id,
    label,
    meta = {},
    ...props
}) {
    if (!props.name) throw Error('`name` is a required prop.')

    const idRef = React.useRef(
        `${props.name}-${String(Math.random()).slice(-5)}`
    )
    const elementId = id || idRef.current
    const descriptionId = description ? `${elementId}-description` : undefined
    const Element = element
    const className = `${element[0].toUpperCase() + element.slice(1)}Field`

    return (
        <div
            className={classList(
                'Field',
                className,
                meta.error && `Field--error ${className}--error`
            )}
        >
            {label && (
                <label
                    className={`Field__label ${className}__label`}
                    htmlFor={elementId}
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
                id={elementId}
                aria-describedby={descriptionId}
                {...field}
                {...props}
            />
            {meta.touched && meta.error && (
                <p className={`Field__error ${className}__error`}>
                    {meta.error}
                </p>
            )}
        </div>
    )
}

function FormikFieldFactory(props) {
    const [field, meta] = useField(props)
    return <FieldFactory field={field} meta={meta} {...props} />
}

export function InputField(props) {
    return <FormikFieldFactory element="input" {...props} />
}

export function SearchField(props) {
    const id = "search-bar"
    return (
        <label className="SearchField" htmlFor={id}>
            <Icon icon="Search" />
            <FieldFactory
                aria-label="Search"
                element="input"
                name="search"
                type="search"
                id={id}
                {...props}
            />
        </label>
    )
}

export function TextareaField(props) {
    return <FormikFieldFactory element="textarea" {...props} />
}

export function SelectField(props) {
    return <FormikFieldFactory element="select" {...props} />
}

export function Form({ className, children, ...props }) {
    return (
        <form className={classList('Form', className)} {...props}>
            {children}
        </form>
    )
}

export function FormFooter({ children }) {
    return (<Grid as="footer" columns={children.length} gap="1rem">{children}</Grid>)
}