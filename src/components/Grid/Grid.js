import React from 'react'
import classList from '@seanmcp/class-list'

import './Grid.scss'

function Grid({ as = 'div', className, columns, gap, ...props }) {
    const Tag = as
    const style = {}
    if (columns) style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    if (gap) style.gridGap = gap
    return (
        <Tag
            className={classList('Grid', className)}
            style={style}
            {...props}
        />
    )
}

export default Grid
