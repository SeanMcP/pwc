import React from 'react'
import Grid from 'components/Grid/Grid'
import LinkButton from 'components/LinkButton/LinkButton'
import ViewContent from 'components/ViewContent/ViewContent'
import APP_NAME from 'constants/appName'

import './ViewHeader.scss'

function ViewHeader({ actionButton = null, backTo = '/', title }) {
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
                    <h1 className="ViewHeader__heading">{title || APP_NAME}</h1>
                    {actionButton}
                </Grid>
            </ViewContent>
        </header>
    )
}

export default ViewHeader
