import React from 'react'
import { Formik } from 'formik'
import { navigate } from '@reach/router'
import { InputField, Form } from 'components/Form/Form'
import AccountViewContainer from 'components/AccountViewContainer/AccountViewContainer'
import Grid from 'components/Grid/Grid'
import Button from 'components/Button/Button'
import ROUTES from 'constants/routes'
import { FIELDS, initialValues, loginValidationSchema } from 'schemas/account'
import { useFirebase } from 'firebase/useFirebase'
import useUser from 'store/useUser'
import RegisterLoginLink from 'components/RegisterLoginLink/RegisterLoginLink'

function LoginView({ path }) {
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
            <RegisterLoginLink path={path} />
        </AccountViewContainer>
    )
}

export default LoginView
