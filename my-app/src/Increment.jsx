import React from 'react'

export default function Increment(props) {
    return (
        <div><button onClick={() => {
            props.setCount((prev) => prev + 1)
        }}>increment</button></div>
    )
}
