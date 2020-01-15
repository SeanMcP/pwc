import React from 'react'
import { Formik } from 'formik'
import { navigate } from '@reach/router'
import { InputField, Form } from 'components/Form/Form'
import AccountViewContainer from 'components/AccountViewContainer/AccountViewContainer'
import Grid from 'components/Grid/Grid'
import Button from 'components/Button/Button'
import AppLink from 'components/AppLink/AppLink'
import ROUTES from 'constants/routes'
import { FIELDS, initialValues, loginValidationSchema } from 'schemas/account'
import { useFirebase } from 'firebase/useFirebase'
import useUser from 'store/useUser'

function LoginView() {
    const { auth } = useFirebase()
    const [, setUser] = useUser()

    function handleSubmit(values) {
        const { email, password } = values
        if (email && password) {
            auth.signInWithEmailAndPassword(email, password)
                .then((authUser) => {
                    setUser(authUser)
                    navigate(ROUTES.home)
                })
                .catch((error) => alert(error))
        }
    }

    return (
        <AccountViewContainer title="Login">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginValidationSchema}
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
                        <Grid columns={2} gap="1rem">
                            <Button
                                disabled={!dirty || Object.keys(errors).length}
                                primary
                            >
                                Login
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
                Don't have an account?{' '}
                <AppLink to={ROUTES.register}>Register!</AppLink>
            </p>
        </AccountViewContainer>
    )
}

export default LoginView
