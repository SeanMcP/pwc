import React from 'react'
import { navigate } from '@reach/router'
import Grid from 'components/Grid/Grid'
import LinkButton from 'components/LinkButton/LinkButton'
import ViewContent from 'components/ViewContent/ViewContent'
import APP_NAME from 'constants/appName'
import useCount from 'hooks/useCount'

import './ViewHeader.scss'

function ViewHeader({ actionButton = null, backTo = '/', title }) {
    const [count, countUp] = useCount()
    React.useEffect(() => {
        if (count === 10) {
            navigate('?debug=true')
        }
    }, [count])
    const shouldRenderBackButton = window.location.pathname !== '/'
    return (
        <header className="ViewHeader">
            <ViewContent>
                <Grid
                    alignItems="center"
                    className="ViewHeader__container"
                    differentColumns={
                        (shouldRenderBackButton || actionButton) &&
                        '48px auto 48px'
                    }
                >
                    {shouldRenderBackButton && (
                        <LinkButton
                            className="ViewHeader__link"
                            icon="ArrowLeft"
                            to={backTo}
                        />
                    )}
                    {/*
                        A11Y NOTE:
                        The following onclick handler is for debug purposes only.
                        There is no app functionality that is inaccessible to
                        non-mouse users.
                    */}
                    <h1 className="ViewHeader__heading" onClick={countUp}>
                        {title || APP_NAME}
                    </h1>
                    {actionButton}
                </Grid>
            </ViewContent>
        </header>
    )
}

export default ViewHeader
