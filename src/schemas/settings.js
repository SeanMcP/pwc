import * as yup from 'yup'

export const FIELDS = {
    includeFavorites: 'includeFavorites',
    listView: 'listView',
    mode: 'mode',
    recommendationCount: 'recommendationCount',
}

export const initialValues = {
    [FIELDS.includeFavorites]: 'true',
    [FIELDS.listView]: 'All',
    [FIELDS.mode]: 'Light',
    [FIELDS.recommendationCount]: 3,
}

export const defaultValues = (values = {}) => ({
    ...initialValues,
    ...values,
})

export const validationSchema = yup.object().shape({
    [FIELDS.includeFavorites]: yup.boolean().required('Required'),
    [FIELDS.listView]: yup.string().required('Required'),
    [FIELDS.mode]: yup.string().required('Required'),
    [FIELDS.recommendationCount]: yup.number().required('Required'),
})
