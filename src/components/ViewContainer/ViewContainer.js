import React from 'react'
import ViewHeader from 'components/ViewHeader/ViewHeader'
import ViewContent from 'components/ViewContent/ViewContent'
import './ViewContainer.scss'

const appName = 'PWC'

function ViewContainer({ backTo, children, hideHeader, title }) {
    React.useEffect(() => {
        document.title = title ? `${title} - ${appName}` : appName
    }, [title])
    return (
        <div className="ViewContainer">
            {!hideHeader && (
                <ViewHeader appName={appName} backTo={backTo} title={title} />
            )}
            <ViewContent>{children}</ViewContent>
        </div>
    )
}

export default ViewContainer
