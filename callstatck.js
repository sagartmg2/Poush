
console.log(1);
console.log(2);

/* 
    ASYNCHRONUS - events that happens in futre. 
 */

function sum(num, num2) {
    console.log("calculate sum");
}

function doSomeTask() {
    console.log("init - dos ome task");
    sum(2, 2)
}

doSomeTask()

// setTimeout(() => {
//     console.log("0-ms");
// }, 0);

// setTimeout(() => {
//     console.log("after 1 second");
// }, 1000);

// setTimeout(() => {
//     console.log("after 2 second");
// }, 2000);

for (let index = 0; index < 1005; index++) {
    setTimeout(() => {
        console.log("inside lloop ", index);
    }, (index * 1000));
}

console.log("end");


