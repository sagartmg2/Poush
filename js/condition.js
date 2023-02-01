
// let left_click = false

// if (left_click) {
//     console.log("setup cursor");
// } else {
//     console.log("show popup");
// }


let will_rain = ''
let has_probability = false


// if (<condition>) {
// if (will_rain) {
//     console.log("take umbrella");
// } else if (has_probability) {
//     console.log("your choice");
// } else {
//     console.log("no need");
// }


if (will_rain) {
    console.log("take umbrella");
} else {
    if (has_probability) {
        console.log("your choise");
    } else {
        console.log("no need");
    }
}

/* 
    falsy values    
        - false
        - 0 ,-0
        - null
        - NaN
        - undefined
        - ''
*/
// console.log([].length);

if (" ") {
    console.log("true value");
} else {
    console.log("false value");
}



/* 
    operators 
        - arthematic opertor    
            let a = b + c
                modulous %
                divisio /
*/


// let result = 100 % 10;  // % -> modulous -> returns the remainder 
let result = 100 / 10;  // % -> modulous -> returns the remainder 
// console.log({ result });


let number = 10
// number = number + 10
// number += 10

// console.log(++number);
console.log(number++, number);
// number += 1
// ++number;
// number++

/*
    pre increment ++<nubmer>
        - increments the number, returns the changed value immediatedly.
    post-increment <number++
        - increments but dodnot return  the changed  value immedidately.
*/

// console.log(number);


/* 
    companrision operator
*/
console.log(10 > 2);

// if( 10 > 2){

// }


let name = "Mern"
let title = "Mern"

let age = 100
let weight = "100"

console.log("check equals", age == weight);
console.log("check equals", age === weight);


/* 
    LOGICAL OPEARTOR 
        and (&&)
        OR
        not
*/

1 && 0


