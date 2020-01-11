import * as yup from 'yup'

export const FIELDS = {
    email: 'email',
    password: 'password',
    confirm: 'confirm',
}

export const initialValues = {
    [FIELDS.email]: '',
    [FIELDS.password]: '',
    [FIELDS.confirm]: '',
}

const loginShape = {
    [FIELDS.email]: yup
        .string()
        .email('Must be a valid email address')
        .required('Required'),
    [FIELDS.password]: yup.string().required('Required'),
}

export const loginValidationSchema = yup.object().shape(loginShape)

export const registerValidationSchema = yup.object().shape({
    ...loginShape,
    [FIELDS.confirm]: yup.string().required('Required'),
})
