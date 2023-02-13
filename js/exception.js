

function doTask() {
    try {
        let todos = []
        todos.push("todo-1")
        console.log(todos);
        let result = sum(1, 2)
    } catch (err) {
        console.log(err)
        console.log(err.message)
    }
}
console.log(1);

doTask()

console.log(2);

