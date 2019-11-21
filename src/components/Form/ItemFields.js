import React from 'react'
import { InputField, TextareaField } from './Form'
import { FIELDS } from 'schemas/item'

export function Name(props) {
    return <InputField label="Name" name={FIELDS.name} {...props} />
}

export function Date(props) {
    return (
        <InputField
            description="You will get a prayer reminder on this date"
            label="Special date"
            name={FIELDS.date}
            type="date"
            {...props}
        />
    )
}

export function Notes(props) {
    return <TextareaField label="Notes" name={FIELDS.notes} {...props} />
}
