import * as yup from 'yup'

export const FIELDS = {
    listView: 'listView',
    recommendationCount: 'recommendationCount',
}

export const initialValues = {
    [FIELDS.listView]: 'All',
    [FIELDS.recommendationCount]: 3,
}

export const defaultValues = (values = {}) => ({
    ...initialValues,
    ...values,
})

export const validationSchema = yup.object().shape({
    [FIELDS.listView]: yup.string().required('Required'),
    [FIELDS.recommendationCount]: yup.number().required('Required'),
})
