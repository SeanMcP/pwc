import React from 'react'
import * as Debug from 'components/Debug/Debug'
import ReleaseBanner from 'components/ReleaseBanner/ReleaseBanner'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import ViewFooter from 'components/ViewFooter/ViewFooter'
import ViewHeader from 'components/ViewHeader/ViewHeader'
import useDebugMode from 'hooks/useDebugMode'
import useDocumentTitle from 'hooks/useDocumentTitle'

import './ViewContainer.scss'

function ViewContainer({
    actionButtons,
    backTo,
    children,
    subHeader = null,
    title,
}) {
    useDebugMode()
    useDocumentTitle(title)

    return (
        <div className="ViewContainer">
            <Debug.Downloader />
            <ReleaseBanner />
            <ViewHeader
                actionButtons={actionButtons}
                backTo={backTo}
                title={title}
            />
            {subHeader}
            <main id="main" role="main" className="ViewContainer__main">
                <ContentContainer>{children}</ContentContainer>
            </main>
            <ViewFooter />
        </div>
    )
}

export default ViewContainer
