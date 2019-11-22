import React from 'react'
import AppLink from 'components/AppLink/AppLink'
import ViewContent from 'components/ViewContent/ViewContent'
import './ViewHeader.scss'
import APP_NAME from 'constants/appName'

function ViewHeader({ backTo = '/', title }) {
    return (
        <header className="ViewHeader">
            <ViewContent>
                <div className="ViewHeader__container">
                    {window.location.pathname !== '/' && (
                        <AppLink className="ViewHeader__link" to={backTo}>
                            Back
                        </AppLink>
                    )}
                    <h1 className="ViewHeader__heading">{title || APP_NAME}</h1>
                </div>
            </ViewContent>
        </header>
    )
}

export default ViewHeader
