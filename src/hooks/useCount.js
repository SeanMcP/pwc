import React from 'react'

export default function useCount(start = 0) {
    const [count, setCount] = React.useState(start)
    const up = () => setCount(count + 1)
    const down = () => setCount(count - 1)
    return [count, up, down]
}
