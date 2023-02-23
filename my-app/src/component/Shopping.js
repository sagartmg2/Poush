import { useState } from 'react'
import Git from "../git.png"


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

    /* 

   let arr =  [
      {
        "title": "oen",
        "quanity": "1"
      },
      {
        "title": "two",
        "quanity": "2"
      },
      {
        "title": "THREE",
        "quanity": "3"
      },
     
    ],
    
    */

    function deleteTodo(index) {

        let temp = [...items]
        temp = temp.filter((todo, idx) => {
            if (index != idx) {
                return true;
            }
        })

        setItems(temp)
        // temp = temp.filter((todo, idx) => index != idx)

    }


    console.log("re-render");
    return (
        <>
            {/* <img src="../git.png" /> */}
            <img src={Git} width={50} />
            <img src="./git.png" width={50} />
            <div>Shopping</div>
            <h1>pERSIST THE TODO ITESM, .. EVEN AFTER REFRESH</h1>

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
                    {
                        items.map((item, index) => {
                            return <tr key={index} >
                                <td>{item.title}</td>
                                <td>{item.quanity}</td>
                                <td><button onClick={() => deleteTodo(index)}>delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
