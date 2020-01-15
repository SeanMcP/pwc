import React from 'react'
import ROUTES from 'constants/routes'
import AppLink from 'components/AppLink/AppLink'

import './RegisterLoginLink.scss'

const ROUTE_MAP = {
    [ROUTES.login]: {
        cta: 'Register here!',
        question: "Don't have an account?",
        url: ROUTES.register,
    },
    [ROUTES.register]: {
        cta: 'Login here!',
        question: 'Already have an account?',
        url: ROUTES.login,
    },
}

function RegisterLoginLink({ path }) {
    const { cta, question, url } = ROUTE_MAP[path]
    return (
        <p className="RegisterLoginLink">
            {question} <AppLink to={url}>{cta}</AppLink>
        </p>
    )
}

export default RegisterLoginLink
