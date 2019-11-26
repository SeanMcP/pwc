import React from 'react'
import * as FeatherIcons from 'react-feather'
import clb from 'class-list-builder'
import './Icon.scss'

function Icon({ block = false, className = '', icon, ...props }) {
    if (!FeatherIcons[icon]) return null

    const Tag = FeatherIcons[icon]

    return (
        <span className={clb('Icon', block && 'Icon--block', className)}>
            <Tag
                className="Icon__svg"
                {...props}
                aria-hidden="true"
                role="img"
            />
        </span>
    )
}

Icon.defaultProps = {
    size: 24,
}

export default Icon
