import React from 'react'
import { InputField, SelectField, TextareaField } from './Form'
import { FIELDS } from 'schemas/item'

export function Name(props) {
    return <InputField label="Name" name={FIELDS.name} {...props} />
}

export function Date(props) {
    return (
        <InputField
            label="Special date"
            name={FIELDS.date}
            type="date"
            {...props}
        />
    )
}

export function DateType(props) {
    return (
        <SelectField label="Date type" name={FIELDS.dateType} {...props}>
            {['Birthday', 'Anniversary', 'Memorial'].map(option => (
                <option key={option} value={option.toLowerCase()}>
                    {option}
                </option>
            ))}
        </SelectField>
    )
}

export function Notes(props) {
    return <TextareaField label="Notes" name={FIELDS.notes} {...props} />
}
