import * as yup from 'yup'

export const FIELDS = {
    recommendationCount: 'recommendationCount',
    mode: 'mode'
}

export const initialValues = {
    [FIELDS.mode]: 'light',
    [FIELDS.recommendationCount]: 3
}

export const defaultValues = (values = {}) => ({
    ...initialValues,
    ...values
})

export const validationSchema = yup.object().shape({
    [FIELDS.mode]: yup.string().required('Required'),
    [FIELDS.recommendationCount]: yup.number().required('Required')
})
