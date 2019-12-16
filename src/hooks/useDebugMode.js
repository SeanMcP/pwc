import React from 'react'
import { isDebugMode } from 'utils/debugUtils'

function useDebugMode() {
    React.useEffect(() => {
        if (isDebugMode()) {
            document.body.dataset.debug = 'true'
        } else {
            document.body.removeAttribute('data-debug')
        }
    })
}

export default useDebugMode
