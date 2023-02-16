
import { useState } from "react"  // { useState: () =>{} }

function Counter() {
    console.log("re-render");

    let initial_value = 111;
    // let [state, setState] = useState(initial_value)  // return  [ inital_value , mutatorFunction ]
    let [state, setState] = useState(0)  // return  [ inital_value , mutatorFunction ]

    let count = 1124

    function increment() {
        count++
        console.log("increment...", count)
    }

    function incrementState() {

        setState((prv) => prv + 1)
        setState((prv) => prv + 1)
        setState((prv) => prv + 1)
        // setState(state + 1)
        // setState(state + 1)


        // state++;
        // console.log(state);
        // let new_value = state
        // setState(++new_value)
        // setState(++new_value)
        // console.log("state", set)
    }
    return <>
        <h1 >Counter : <span id="count" >{count} </span></h1>
        <h1 >STate Counter : <span id="count" >{state} </span></h1>
        {/* <button onClick="increment()">increment</button> */}
        <button onClick={increment}>increment</button>
        <button onClick={incrementState}>increment STATE</button>
    </>
}

export default Counter