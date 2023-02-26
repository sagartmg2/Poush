import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

export default function TodoApi() {
    const [todos, setTodos] = useState([]);

    const [counter, setcounter] = useState(0);

    const [status, setstatus] = useState(true);


    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    /* 
            CRUD operation    
                C - create
                R - read 
                U - update
                D - deleted 
            
            HTTP methods
                GET  - read
                POST - crate
                PUT - update
                DELETE 
            
            STATUS code
                2 // success 
                    200
                    201 
                    204
                3 // redirect
                    302 
                4 // client error
                    401 - unauthneticated.. // not logged in 
                    403 - forbidden 
                    404  = resource not found / page not found
                5 //
                    500 - server error 

    */



    function fetchTodos() {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                console.log(response.data);
                let todos_from_api = response.data;  // 200 
                setTodos(todos_from_api)
            })
    }

    /* life cycle methods */
    /* 
        componentDidMount  --  the very first initial mounting of component   // runs only opce...
        componentDidUpdate
    */

    useEffect(() => {
        console.log("inside useEffect- component did update");
        // fetchTodos();
    }, [status])


    /* COMPONENT DID MOUNT */
    useEffect(() => {
        console.log("component did mount");
        fetchTodos()
    }, []) // empty dependencies
    // },[dependencies])





    console.log("re-render");
    return (
        <>
            <div>TodoApi</div>
            <h1>{counter}</h1>
            <button onClick={() => {
                setcounter(counter + 1)
            }}>cicrement</button>
            <button onClick={() => {
                setstatus(!status)
            }}>toggleStatus</button>
            <table>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        todos.map(todo => {
                            return <tr key={todo.id}>
                                <td><Link to={`/todos/${todo.id}`}> {todo.title}</Link></td>
                                <td>{todo.completed}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>

    )
}
