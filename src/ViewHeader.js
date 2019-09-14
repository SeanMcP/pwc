import React from 'react'
import ViewContent from 'ViewContent'
import ButtonLink from 'ButtonLink'

function ViewHeader({ appName, backTo = '/', title }) {
    return (
        <header className="ViewHeader">
            <ViewContent>
                {window.location.pathname !== '/' && (
                    <ButtonLink to={backTo}>Back</ButtonLink>
                )}
                <h1>{title || appName}</h1>
            </ViewContent>
        </header>
    )
}

export default ViewHeader
