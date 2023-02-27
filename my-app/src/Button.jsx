import React from 'react'

export default function Button(props) {
    return (
        <div>
            <div><button onClick={() => {
                props.setCount(0)
            }}>reset{props.count}</button></div>
        </div>
    )
}
