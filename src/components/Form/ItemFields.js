import React from 'react'
import { InputField, SelectField, TextareaField } from './Form'
import { FIELDS } from 'schemas/item'
import Grid from 'components/Grid/Grid'

export function Name(props) {
    return <InputField label="Name" name={FIELDS.name} required {...props} />
}

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export function Date() {
    return (
        <div aria-labelledby="Date__label" className="Field" role="group">
            <div id="Date__label" className="Field__label">
                Special Date
            </div>
            <small
                className="Field__description"
                style={{ marginBottom: '0.5rem' }}
            >
                You will get a prayer reminder on this date
            </small>
            <Grid columns={2} gap={'0.5rem'}>
                <Month />
                <Day />
            </Grid>
        </div>
    )
}

export function Day(props) {
    const dayOptions = []
    for (let i = 1; i <= 31; i++) {
        dayOptions.push(
            <option key={i} value={i}>
                {i}
            </option>
        )
    }
    return (
        <SelectField hideLabel label="Day" name={FIELDS.day} {...props}>
            {dayOptions}
        </SelectField>
    )
}

export function Month(props) {
    return (
        <SelectField hideLabel label="Month" name={FIELDS.month} {...props}>
            {MONTHS.map((month, index) => (
                <option key={index} value={index}>
                    {month}
                </option>
            ))}
        </SelectField>
    )
}

export function Notes(props) {
    return <TextareaField label="Notes" name={FIELDS.notes} {...props} />
}
