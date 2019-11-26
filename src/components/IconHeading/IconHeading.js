import React from 'react'
import clb from 'class-list-builder'

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
        <header className={clb('IconHeading', className)} {...props}>
            <Icon icon={icon} />
            <HeadingTag className="IconHeading__heading">{children}</HeadingTag>
        </header>
    )
}

export default IconHeading
