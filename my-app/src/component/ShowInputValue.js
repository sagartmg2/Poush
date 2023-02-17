import { useState } from "react"

function ShowInputValue() {

    let [value, setValue] = useState("ok")
    let [count, setCount] = useState(0)

    // let value = "Hello World !"

    console.log("re  - render...");

    const handleChange = (event) => {
        // console.log(event.target.value)
        // value = event.target.value
        // console.log(value)
        // setValue("string....")
        setValue(event.target.value)
        // setValue((value + "add   "))
        // console.log("handle change");
    }

    return <>
        <h1>Value: {value} </h1>
        {/* <input onChange={(e) => { setValue(e.target.value) }} /> */}
        {/* <input onChange={handleChange} value={value} /> */}
        <input onChange={(e) => { handleChange(e) }} value={value} />
    </>
}

export default ShowInputValue