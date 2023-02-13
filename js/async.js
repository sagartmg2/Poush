
// console.log(1);
// console.log(2);
// console.log(3);

// for (let i = 0; i < 10; i++) {
//     console.log("inside loop");
// }

function doTask() {
    console.log("do task");
}

console.log(4);
console.log(5);

/* 
    asynchronous funciton 
        - task that run in background
*/

setTimeout(doTask, 5000)

/* 
    promise // asynchronous // events that happens in future -  // runs in background // donot stop  tasks below
        -  pending
        - resolved
        - reject
 */



setTimeout(doTask, 10000)
let promise1 = new Promise((resolve, reject) => {
    // resolve("success ")
    (setTimeout(() => {
        resolve({ data: { "name": "value" } })
        // reject({ error: "Server Error" })
    }, 10000))
})


console.log(promise1);

function doTaskAfterPromiseResolved() {
    console.log("promise has been resolved");
}

promise1.then(doTaskAfterPromiseResolved)

// .then((res) => {
//     console.log("primose - resolved", res);
// }).catch((err) => {
//     console.log("error", err);
// })

console.log("end");
console.log("2nd- end");
// for (let i = 0; i < 100; i++) {
//     console.log("inside loop");
// }
