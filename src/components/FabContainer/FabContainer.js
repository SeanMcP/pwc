import React from 'react'
import classList from '@seanmcp/class-list'

import './FabContainer.scss'

function FabContainer({ children, left = false, right = true }) {
    if (left && right)
        throw Error('`FabContainer` cannot receive `left` and `right` props.')
    return (
        <div className="FabContainer">
            <div
                className={classList(
                    'FabContainer__buttons',
                    left && 'FabContainer__buttons--left',
                    right && 'FabContainer__buttons--right'
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default FabContainer
