import { useState } from 'react'
import { useSelector } from 'react-redux';
import Decrement from './Decrement'
import Increment from './Increment'
import { increment } from './redux/Slice/CounterSlice';
import Reset from './Reset';

export default function ReduxComponent() {
    const counter_data = useSelector((store) => { return store.counter })

    const [count, setCount] = useState(0);
    // function increment() {
    //     console.log("increment count");
    // }
    return (
        <>
            <div></div>
            <h1>Count:{count}</h1>
            <h1>Redux Count:{counter_data.value}</h1>
            <Increment count={0} increment={increment} setCount={setCount} />
            <Decrement setCount={setCount} />
            <Reset count={count} setCount={setCount} />
        </>

    )
}
