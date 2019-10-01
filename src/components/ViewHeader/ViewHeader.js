import React from 'react'
import ViewContent from 'components/ViewContent/ViewContent'
import AppLink from 'components/AppLink/AppLink'
import './ViewHeader.scss'

function ViewHeader({ appName, backTo = '/', title }) {
    return (
        <header className="ViewHeader">
            <ViewContent>
                <div className="ViewHeader__container">
                    {window.location.pathname !== '/' && (
                        <AppLink className="ViewHeader__link" to={backTo}>
                            Back
                        </AppLink>
                    )}
                    <h1 className="ViewHeader__heading">{title || appName}</h1>
                </div>
            </ViewContent>
        </header>
    )
}

export default ViewHeader
