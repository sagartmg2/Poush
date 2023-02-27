import { useState } from 'react'
import Decrement from './Decrement'
import Increment from './Increment'
import Reset from './Reset';

export default function ReduxComponent() {

    const [count, setCount] = useState(0);
    function increment() {
        console.log("increment count");
    }
    return (
        <>
            <div></div>
            <h1>Count:{count}</h1>
            <Increment count={0} increment={increment} setCount={setCount} />
            <Decrement setCount={setCount} />
            <Reset count={count} setCount={setCount} />
        </>

    )
}
