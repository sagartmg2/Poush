import React from 'react'

export default function Button({ type }) {
    return (
        <button className={type == "primary" ? "blue" : (type == "dagner" ? "red" : "")}   >Button</button>
    )
}
