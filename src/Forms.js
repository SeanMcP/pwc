import React from 'react'
import { Label, Pane, minorScale, Textarea } from 'evergreen-ui'

export function TextareaField({ label, marginBottom, marginTop, ...props }) {
    const id = `${props.name}-${String(Math.random()).slice(-5)}`
    return (
        <Pane marginBottom={marginBottom} marginTop={marginTop}>
            <Label htmlFor={id} marginBottom={minorScale(1)} display="block">
                {label}
            </Label>
            <Textarea {...props} id={id} />
        </Pane>
    )
}
