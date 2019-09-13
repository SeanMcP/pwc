import React from 'react'
import ViewHeader from 'ViewHeader'
import ViewContent from 'ViewContent'

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
