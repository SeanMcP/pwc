import React from 'react'
import { Link } from '@reach/router'
import ViewContent from 'ViewContent'

function ViewHeader({ appName, backTo = '/', title }) {
    return (
        <header className="ViewHeader">
            <ViewContent>
                {window.location.pathname !== '/' && (
                    <Link to={backTo}>Back</Link>
                )}
                <h1>{title || appName}</h1>
            </ViewContent>
        </header>
    )
}

export default ViewHeader
