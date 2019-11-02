import React from 'react'
import classList from '@seanmcp/class-list'

import Icon from 'components/Icon/Icon'

import './IconWithText.scss'

function IconWithText({
    className,
    containerTag = 'div',
    icon,
    iconProps = {},
    text,
    textTag = 'p',
    ...props
}) {
    if (!icon) return text

    const ContainerTag = containerTag
    const TextTag = textTag

    return (
        <ContainerTag
            className={classList('IconWithText', className)}
            {...props}
        >
            <Icon icon={icon} {...iconProps} />
            <TextTag className="IconWithText__text">{text}</TextTag>
        </ContainerTag>
    )
}

export default IconWithText
