import React from 'react'
import classList from '@seanmcp/class-list'
import './ViewContent.scss'

function ViewContent({ children, squish, ...props }) {
    return (
        <div
            className={classList(
                'ViewContent',
                squish && 'ViewContent__squish'
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default ViewContent
