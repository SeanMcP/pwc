import * as yup from 'yup'

export const FIELDS = {
    name: 'name',
    date: 'date',
    notes: 'notes',
}

export const initialValues = {
    [FIELDS.name]: '',
    [FIELDS.date]: '',
    [FIELDS.notes]: '',
}

export const defaultValues = (values = {}) => ({
    ...initialValues,
    ...values,
})

export const validationSchema = yup.object().shape({
    [FIELDS.name]: yup.string().required('Required'),
    [FIELDS.date]: yup.string(),
    [FIELDS.notes]: yup.string(),
})
