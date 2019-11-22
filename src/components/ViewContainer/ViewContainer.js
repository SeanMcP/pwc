import React from 'react'
import ReleaseBanner from 'components/ReleaseBanner/ReleaseBanner'
import ViewContent from 'components/ViewContent/ViewContent'
import ViewFooter from 'components/ViewFooter/ViewFooter'
import ViewHeader from 'components/ViewHeader/ViewHeader'
import './ViewContainer.scss'
import APP_NAME from 'constants/appName'

function ViewContainer({
    backTo,
    children,
    hideHeader,
    searchBar = null,
    title
}) {
    React.useEffect(() => {
        document.title = title ? `${title} - ${APP_NAME}` : APP_NAME
    }, [title])
    return (
        <div className="ViewContainer">
            <ReleaseBanner />
            {!hideHeader && (
                <ViewHeader
                    backTo={backTo}
                    title={title}
                />
            )}
            {searchBar}
            <main id="main" role="main" className="ViewContainer__main">
                <ViewContent>{children}</ViewContent>
            </main>
            <ViewFooter />
        </div>
    )
}

export default ViewContainer
