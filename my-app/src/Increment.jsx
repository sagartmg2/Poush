import React from 'react'

export default function Increment(props) {
    return (
        <div><button onClick={() => { props.increment() }}>increment</button></div>
    )
}
