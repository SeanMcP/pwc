import React from 'react'
import { Heading } from 'evergreen-ui'

export function H1(props) {
    return <Heading is="h1" size={900} {...props} />
}

export function H2(props) {
    return <Heading is="h2" size={700} {...props} />
}

export function H3(props) {
    return <Heading is="h2" size={500} {...props} />
}

export function H4(props) {
    return <Heading is="h2" size={400} {...props} />
}
