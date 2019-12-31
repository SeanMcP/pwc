import React from 'react'
import * as Debug from 'components/Debug/Debug'
import ReleaseBanner from 'components/ReleaseBanner/ReleaseBanner'
import ViewContent from 'components/ViewContent/ViewContent'
import ViewFooter from 'components/ViewFooter/ViewFooter'
import ViewHeader from 'components/ViewHeader/ViewHeader'
import APP_NAME from 'constants/appName'
import useDebugMode from 'hooks/useDebugMode'

import './ViewContainer.scss'

function ViewContainer({
    actionButtons,
    backTo,
    children,
    searchBar = null,
    title,
}) {
    useDebugMode()

    React.useEffect(() => {
        document.title = title ? `${title} - ${APP_NAME}` : APP_NAME
    }, [title])

    return (
        <div className="ViewContainer">
            <Debug.Downloader />
            <ReleaseBanner />
            <ViewHeader
                actionButtons={actionButtons}
                backTo={backTo}
                title={title}
            />
            {searchBar}
            <main id="main" role="main" className="ViewContainer__main">
                <ViewContent>{children}</ViewContent>
            </main>
            <ViewFooter />
        </div>
    )
}

export default ViewContainer
