let arr = [
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

]

let todos = arr.filter((todo, index) => {
    if (index != 2) {
        return true
    }
})


console.log({todos})



let numbers = [1, 2, 3, 4, 5] // [2,4]

const checkEven = (number) => {
    if (number % 2 == 0) {
        return true;
    } else {
        return false
    }
}

let result = checkEven(2)
console.log(result);

// numbers.filter(cb_function)
// let even_numbers = numbers.filter(checkEven)


let even_numbers = numbers.filter((number) => { return number % 2 == 0 })
console.log(even_numbers);



//   for(let i = 0; i<3;i++){
//     let j = arr[i];
//     if(i == 1){
//         arr.splice(1, 1);
//     }
//   }


//   let arr2 = [];
//   for(let i = 0; i<3;i++){
//     if(i != 1){
//         arr2.push(arr[i])
//     }
//   }

//   console.log(arr2);


// console.log(arr)