import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from './redux/Slice/CounterSlice'


export default function Button(props) {
    const dispatch = useDispatch()

    let counter_data = useSelector((store) => { return store.counter })

    return (
        <>
            <div>
                <div><button onClick={() => {
                    props.setCount(0)
                }}>reset{props.count}</button></div>
            </div>
            <div>
                <div><button onClick={() => {
                    dispatch(reset())
                }}>reset redux</button></div>
            </div>
        </>

    )
}
