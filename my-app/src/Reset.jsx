import React from 'react'
import Button from './Button'

export default function Reset(props) {
    return (
        <div>
            <Button count={props.count} setCount={props.setCount} />
        </div>
    )
}
