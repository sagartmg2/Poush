let todos = [
    { completed: false, id: 1, title: "delectus aut aute…" },
    { completed: false, id: 2, title: "delectus aut aute…" },
    { completed: false, id: 3, title: "delectus aut aute…" },
]



function changeStatus(id) {
    // let temp = [...todos]

    // for (let i = 0; i < temp.length; i++) {
    //     if (temp[i].id == id) {
    //         temp[i].completed = !temp[i].completed
    //     }
    // }

    let temp = todos.map((todo) => {
        if (todo.id == id) {
            return { ...todo, completed: !todo.completed }
        }
        return todo
    })

    //    return todos.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed } : todo)



    return temp;
}

console.log(changeStatus(3))