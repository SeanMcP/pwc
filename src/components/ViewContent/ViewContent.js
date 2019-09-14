import React from 'react'
import './ViewContent.scss'

function ViewContent({ children, ...props }) {
    return (
        <div className="ViewContent" {...props}>
            {children}
        </div>
    )
}

export default ViewContent
