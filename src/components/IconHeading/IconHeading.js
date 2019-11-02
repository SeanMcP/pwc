import React from 'react'
import classList from '@seanmcp/class-list'

import Icon from 'components/Icon/Icon'

import './IconHeading.scss'

function IconHeading({
    className,
    children,
    icon,
    headingTag = 'h2',
    ...props
}) {
    const HeadingTag = headingTag
    return (
        <header className={classList('IconHeading', className)} {...props}>
            <Icon icon={icon} />
            <HeadingTag className="IconHeading__heading">{children}</HeadingTag>
        </header>
    )
}

export default IconHeading
