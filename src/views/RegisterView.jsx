import React from 'react'
import { Formik } from 'formik'
import { navigate } from '@reach/router'
import { InputField, Form } from 'components/Form/Form'
import AccountViewContainer from 'components/AccountViewContainer/AccountViewContainer'
import Grid from 'components/Grid/Grid'
import Button from 'components/Button/Button'
import ROUTES from 'constants/routes'
import {
    FIELDS,
    initialValues,
    registerValidationSchema,
} from 'schemas/account'
import { useFirebase } from 'firebase/useFirebase'
import useUser from 'store/useUser'
import RegisterLoginLink from 'components/RegisterLoginLink/RegisterLoginLink'

function RegisterView({ path }) {
    const { auth } = useFirebase()
    const [, setUser] = useUser()

    function handleSubmit(values) {
        const { confirm, email, password } = values
        if (email && password && confirm && password === confirm) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((authUser) => {
                    setUser(authUser)
                    navigate(ROUTES.home)
                })
                .catch((error) => alert(error))
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
                                type="submit"
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
            <RegisterLoginLink path={path} />
        </AccountViewContainer>
    )
}

export default RegisterView
