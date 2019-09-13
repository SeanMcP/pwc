import React from 'react'
import { navigate } from '@reach/router'
import { Pane, majorScale, BackButton } from 'evergreen-ui'
import { H1 } from 'Headings'
import ViewContent from 'ViewContent'
import ButtonLink from 'ButtonLink'

function ViewHeader({ appName, backTo = '/', title }) {
    return (
        <Pane is="header" marginBottom={majorScale(2)}>
            <ViewContent>
                {window.location.pathname !== '/' && (
                    <ButtonLink to={backTo} iconBefore="arrow-left">
                        Back
                    </ButtonLink>
                )}
                <H1>{title || appName}</H1>
            </ViewContent>
        </Pane>
    )
}

export default ViewHeader
