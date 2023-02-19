import { useState } from 'react'

export default function Shopping() {


    let intital_items = [
        {
            title: "apple",
            quanity: "1212"
        },
        {
            title: "banana",
            quanity: "12"
        },
    ]

    // let [items, setItems] = useState(intital_items)  // return [ items , mutatorfucntion   ]  // array destrcuturing..
    let [items, setItems] = useState([])  // return [ items , mutatorfucntion   ]  // array destrcuturing..


    let handleSuibmit = (event) => {
        event.preventDefault()

        // items.push({
        //     title: "orange",
        //     quanity: "12"
        // })

        // let temp = items  // reference data types
        let temp = [...items]
        temp.push({
            title: event.target.title.value,
            quanity: event.target.quantity.value
        })

        setItems(temp)
        // setItems("string...")

        console.log(items)
    }

    console.log("re-render");
    return (
        <>
            <div>Shopping</div>

            <form onSubmit={handleSuibmit} >
                <input placeholder='title' name='title' />
                <input placeholder='quanity' name='quantity' />
                {/* <input type={"submit"} value="create"/> */}
                <button type={"submit"} value="create">create</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>quanity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        items.map((item, index) => {
                            return <tr key={index} >
                                <td>{item.title}</td>
                                <td>{item.quanity}</td>
                                <td><button>delete</button></td>
                            </tr>
                        })
                    } */}
                </tbody>
            </table>
        </>
    )
}
