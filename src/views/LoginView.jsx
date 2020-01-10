import React from 'react'
import { Formik } from 'formik'
import { InputField, Form } from 'components/Form/Form'
import AccountViewContainer from 'components/AccountViewContainer/AccountViewContainer'

function LoginView() {
    return (
        <AccountViewContainer title="Login">
            <Formik>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            label="Email address"
                            name="email"
                            type="email"
                        />
                        <InputField
                            label="Password"
                            name="password"
                            type="password"
                        />
                    </Form>
                )}
            </Formik>
        </AccountViewContainer>
    )
}

export default LoginView
