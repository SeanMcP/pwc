import React from 'react'
import ViewHeader from 'components/ViewHeader/ViewHeader'
import ViewContent from 'components/ViewContent/ViewContent'
import './ViewContainer.scss'
import ViewFooter from 'components/ViewFooter/ViewFooter'
import SearchBar from 'components/SearchBar/SearchBar'

const appName = 'PWC'

function ViewContainer({
    backTo,
    children,
    hideHeader,
    searchProps = {},
    title,
    withSearch
}) {
    React.useEffect(() => {
        document.title = title ? `${title} - ${appName}` : appName
    }, [title])
    return (
        <div className="ViewContainer">
            {!hideHeader && (
                <ViewHeader appName={appName} backTo={backTo} title={title} />
            )}
            <main id="main" role="main" className="ViewContainer__main">
                <ViewContent>{children}</ViewContent>
            </main>
            {withSearch && <SearchBar {...searchProps} />}
            <ViewFooter />
        </div>
    )
}

export default ViewContainer
