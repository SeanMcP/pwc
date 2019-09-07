import React from 'react'
import { Card, majorScale } from 'evergreen-ui'

function AppCard(props) {
    return <Card border="default" padding={majorScale(2)} {...props} />
}

export default AppCard
