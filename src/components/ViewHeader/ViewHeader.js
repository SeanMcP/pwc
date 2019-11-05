import React from 'react'
import classList from '@seanmcp/class-list'
import ViewContent from 'components/ViewContent/ViewContent'
import AppLink from 'components/AppLink/AppLink'
import './ViewHeader.scss'

function ViewHeader({ alternate, appName, backTo = '/', title }) {
    return (
        <header
            className={classList(
                'ViewHeader',
                alternate && 'ViewHeader--alternate'
            )}
        >
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
