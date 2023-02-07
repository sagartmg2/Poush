let arr = [1, 2, 3, 4, 5]
let temp = []

// for (let i = 0; i < arr.length; i++) {
//     // temp[i] = arr[i] * 2
//     // temp.push(arr[i] * 2)
//     double()
// }
// console.log(arr);
// console.log(temp);

// function double(element, index) {
//     console.log(element, index);
//     // return () => {
//     //     console.log("inside double");
//     // }
//     // return undefined
// }
const double = (element, index) => {
    console.log(element, index);
}


function sum(num1, num2) {
    return num1 + num2
}

// let result = sum(1, 2)
// double(sum(1, 23))
// double(24)


/* callback  cb
    - a function passed to another function as arguement/parameter
*/

// arr.forEach(double)
// arr.forEach(undefined)
// arr.forEach((element, index) => { temp.push(element * 2) })
// console.log(temp);

arr = arr.map((element, index) => { return element * 2; console.log(element); })
console.log(arr);

