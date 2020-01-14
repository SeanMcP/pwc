import React from 'react'
import { Formik } from 'formik'
import { InputField, Form } from 'components/Form/Form'
import AccountViewContainer from 'components/AccountViewContainer/AccountViewContainer'
import Grid from 'components/Grid/Grid'
import Button from 'components/Button/Button'
import AppLink from 'components/AppLink/AppLink'
import ROUTES from 'constants/routes'
import {
    FIELDS,
    initialValues,
    registerValidationSchema,
} from 'schemas/account'
import { useFirebase } from 'firebase/useFirebase'

function RegisterView() {
    const { auth } = useFirebase()

    function handleSubmit(values) {
        const { confirm, email, password } = values
        if (email && password && confirm && password === confirm) {
            auth.doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <AccountViewContainer title="Register">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={registerValidationSchema}
            >
                {({ dirty, errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            label="Email address"
                            name={FIELDS.email}
                            type="email"
                        />
                        <InputField
                            label="Password"
                            name={FIELDS.password}
                            type="password"
                        />
                        <InputField
                            label="Confirm password"
                            name={FIELDS.confirm}
                            type="password"
                        />
                        <Grid columns={2} gap="1rem">
                            <Button
                                disabled={!dirty || Object.keys(errors).length}
                                primary
                            >
                                Register
                            </Button>
                            <Button
                                disabled={!dirty || Object.keys(errors).length}
                                type="reset"
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
            <p className="--text-center" style={{ marginTop: '2rem' }}>
                Already have an account?{' '}
                <AppLink to={ROUTES.login}>Login!</AppLink>
            </p>
        </AccountViewContainer>
    )
}

export default RegisterView
