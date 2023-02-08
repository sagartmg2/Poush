
let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "task one",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "task two",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "task three",
        "completed": true
    }
]   

/* 
    TODO:
    output
    task one is incomplete
    task two is incomplete
    task three is completed

*/

// for (let i = 0; i < todos.length; i++) {
//     let todo = todos[i];

//     // if (todo.completed == true) {
//     //     console.log(`${todo.title} is complted`);
//     // }
//     // else {
//     //     console.log(`${todo.title} is incomplete`);
//     // }
//     console.log(`${todo.title} is ${ todo.completed ? "completed" : "incomplete" }`);


// }

// todos.forEach((todo) => {
//     console.log(`${todo.title} is ${todo.completed ? "completed" : "incomplete"}`);
// })

todos.forEach((todo) => console.log(`${todo.title} is ${todo.completed ? "completed" : "incomplete"}`) )