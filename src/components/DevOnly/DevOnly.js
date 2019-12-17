import React from 'react'

function DevOnly({ children, off = false }) {
    const isOn = !off
    if (process.env.NODE_ENV === 'development' && isOn) {
        return <>{children}</>
    }
    return null
}

export default DevOnly
