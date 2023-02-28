import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './redux/Slice/CounterSlice'

export default function Increment(props) {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {

                props.setCount((prev) => prev + 1)
            }}>increment</button>

            <button onClick={() => {
                // increment();
                dispatch(increment())
            }}>increment redux</button>
        </div>
    )
}
