import React from 'react'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import { InputField, Form } from 'components/Form/Form'
import { Formik } from 'formik'

function LoginView() {
    return (
        <ViewContainer title="Login">
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
        </ViewContainer>
    )
}

export default LoginView
