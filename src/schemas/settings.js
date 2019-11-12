import * as yup from 'yup'

export const FIELDS = {
    recommendationCount: 'recommendationCount'
}

export const initialValues = {
    [FIELDS.recommendationCount]: 3
}

export const defaultValues = (values = {}) => ({
    ...initialValues,
    ...values
})

export const validationSchema = yup.object().shape({
    [FIELDS.recommendationCount]: yup.number().required('Required')
})
