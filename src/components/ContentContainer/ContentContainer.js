import React from 'react'
import clb from 'class-list-builder'
import './ContentContainer.scss'

function ContentContainer({
    as = 'div',
    children,
    className,
    squish,
    ...props
}) {
    const Tag = as
    return (
        <Tag
            className={clb(
                'ContentContainer',
                squish && 'ContentContainer--squish',
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    )
}

export default ContentContainer
