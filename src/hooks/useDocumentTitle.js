import React from 'react'
import APP_NAME from 'constants/appName'

function useDocumentTitle(title) {
    React.useEffect(() => {
        document.title = title ? `${title} - ${APP_NAME}` : APP_NAME
    })
}

export default useDocumentTitle
