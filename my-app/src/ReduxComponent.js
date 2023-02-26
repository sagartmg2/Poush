import React from 'react'
import Decrement from './Decrement'
import Increment from './Increment'
import Reset from './Reset';

export default function ReduxComponent() {

    function increment() {
        console.log("increment count");
    }
    return (
        <>
            <div></div>
            <h1>Count:0</h1>
            <Increment count={0} increment={increment} />
            <Decrement />
            <Reset />
        </>

    )
}
