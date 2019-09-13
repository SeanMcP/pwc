import React from 'react'
import { H1 } from 'Headings'
import ViewContent from 'ViewContent'
import ButtonLink from 'ButtonLink'

function ViewHeader({ appName, backTo = '/', title }) {
    return (
        <header className="ViewHeader">
            <ViewContent>
                {window.location.pathname !== '/' && (
                    <ButtonLink to={backTo} iconBefore="arrow-left">
                        Back
                    </ButtonLink>
                )}
                <H1>{title || appName}</H1>
            </ViewContent>
        </header>
    )
}

export default ViewHeader
