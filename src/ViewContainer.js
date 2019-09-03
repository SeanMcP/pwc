import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'

function ViewContainer(props) {
    React.useEffect(() => {
        document.title = props.title ? `${props.title} - PWC` : 'PWC'
    }, [props.title])
    return <Pane padding={majorScale(2)}>{props.children}</Pane>
}

export default ViewContainer
