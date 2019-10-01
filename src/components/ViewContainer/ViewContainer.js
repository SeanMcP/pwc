import React from 'react'
import ViewHeader from 'components/ViewHeader/ViewHeader'
import ViewContent from 'components/ViewContent/ViewContent'
import './ViewContainer.scss'
import ViewFooter from 'components/ViewFooter/ViewFooter'
import AlphaBanner from 'components/AlphaBanner/AlphaBanner'

const appName = 'PWC'

function ViewContainer({ backTo, children, hideHeader, title }) {
    React.useEffect(() => {
        document.title = title ? `${title} - ${appName}` : appName
    }, [title])
    return (
        <div className="ViewContainer">
            <AlphaBanner />
            {!hideHeader && (
                <ViewHeader appName={appName} backTo={backTo} title={title} />
            )}
            <main id="main" role="main" className="ViewContainer__main">
                <ViewContent>{children}</ViewContent>
            </main>
            <ViewFooter />
        </div>
    )
}

export default ViewContainer
