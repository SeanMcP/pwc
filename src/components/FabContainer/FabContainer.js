import React from 'react'
import classList from '@seanmcp/class-list'

import './FabContainer.scss'

function FabContainer({ children, left = false, right = true }) {
    if (left && right)
        throw Error('`FabContainer` cannot receive `left` and `right` props.')
    return (
        <div
            className={classList(
                'FabContainer',
                left && 'FabContainer--left',
                right && 'FabContainer--right'
            )}
        >
            {children}
        </div>
    )
}

export default FabContainer
