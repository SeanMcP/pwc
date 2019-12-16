import React from 'react'
import clb from 'class-list-builder'

import './Grid.scss'

function Grid({
    alignItems,
    as = 'div',
    className,
    columns,
    differentColumns,
    gap,
    inline = false,
    units = '1fr',
    ...props
}) {
    const Tag = as
    const style = {}
    if (alignItems) style.alignItems = alignItems
    if (columns) {
        style.gridTemplateColumns = `repeat(${columns}, ${units})`
    } else if (differentColumns) {
        style.gridTemplateColumns = differentColumns
    }
    if (gap) style.gridGap = gap
    return (
        <Tag
            className={clb('Grid', className, inline && 'Grid--inline')}
            style={style}
            {...props}
        />
    )
}

export default Grid
