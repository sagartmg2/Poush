import React from 'react'

export default function Decrement({ setCount }) {
    return (
        <div>
            <div><button onClick={() => {
                setCount((prev) => prev - 1)
            }}>ecrement</button></div>
        </div>
    )
}
