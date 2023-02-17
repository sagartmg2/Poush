import { useState } from 'react'

export default function Todos() {

    let inital_todos = ["task-1", "task-2"]
    const [todos, setTodos] = useState(inital_todos);

    function handleSuibmit(e) {
        e.preventDefault()
        // let arr = todos;  // reference data types
        let arr = [...todos];
        arr.push(e.target.task_name.value)
        setTodos(arr)
    }

    return (
        <div>
            <form onSubmit={handleSuibmit}>
                <input name="product_name" />
                <input name="quanity" />
                <button> ADD</button>
            </form>
            {/* <form onSubmit={handleSuibmit}>
                <input name="task_name" />
                <button> ADD</button>
            </form> */}

            <h1>Todos</h1>
            <ul>
                {
                    todos.map((todo) => {
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
