import React from 'react'
import clb from 'class-list-builder'
import './ViewContent.scss'

function ViewContent({ children, squish, ...props }) {
    return (
        <div
            className={clb('ViewContent', squish && 'ViewContent__squish')}
            {...props}
        >
            {children}
        </div>
    )
}

export default ViewContent
