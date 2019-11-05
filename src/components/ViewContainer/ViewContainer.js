import React from 'react'
import ViewHeader from 'components/ViewHeader/ViewHeader'
import ViewContent from 'components/ViewContent/ViewContent'
import './ViewContainer.scss'
import ViewFooter from 'components/ViewFooter/ViewFooter'
import AlphaBanner from 'components/AlphaBanner/AlphaBanner'

const appName = 'PWC'

function ViewContainer({
    alternateHeader = false,
    backTo,
    children,
    hideHeader,
    searchBar = null,
    title
}) {
    React.useEffect(() => {
        document.title = title ? `${title} - ${appName}` : appName
    }, [title])
    return (
        <div className="ViewContainer">
            <AlphaBanner />
            {!hideHeader && (
                <ViewHeader
                    alternate={alternateHeader}
                    appName={appName}
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
