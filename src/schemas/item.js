import * as yup from 'yup'

export const FIELDS = {
    name: 'name',
    date: 'date',
    day: 'day',
    month: 'month',
    notes: 'notes',
}

export const initialValues = {
    [FIELDS.name]: '',
    [FIELDS.date]: '',
    [FIELDS.day]: '',
    [FIELDS.month]: '',
    [FIELDS.notes]: '',
}

export const defaultValues = (values = {}) => ({
    ...initialValues,
    ...values,
})

export const validationSchema = yup.object().shape({
    [FIELDS.name]: yup.string().required('Required'),
    [FIELDS.date]: yup.string(),
    [FIELDS.day]: yup.string(),
    [FIELDS.month]: yup.string(),
    [FIELDS.notes]: yup.string(),
})
