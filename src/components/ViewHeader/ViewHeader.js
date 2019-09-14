import React from 'react'
import ViewContent from 'components/ViewContent/ViewContent'
import AppLink from 'components/AppLink/AppLink'
import './ViewHeader.scss'

function ViewHeader({ appName, backTo = '/', title }) {
    return (
        <header className="ViewHeader">
            <ViewContent>
                {window.location.pathname !== '/' && (
                    <AppLink to={backTo}>Back</AppLink>
                )}
                <h1 className="ViewHeader__heading">{title || appName}</h1>
            </ViewContent>
        </header>
    )
}

export default ViewHeader
