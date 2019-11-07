import * as yup from 'yup'

export const FIELDS = {
    name: 'name',
    date: 'date',
    dateType: 'dateType',
    notes: 'notes'
}

export const initialValues = {
    [FIELDS.name]: '',
    [FIELDS.date]: '',
    [FIELDS.dateType]: 'birthday',
    [FIELDS.notes]: ''
}

export const validationSchema = yup.object().shape({
    [FIELDS.name]: yup.string().required('Required'),
    [FIELDS.date]: yup.string(),
    [FIELDS.dateType]: yup.string(),
    [FIELDS.notes]: yup.string()
})
