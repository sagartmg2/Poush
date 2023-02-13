var name = "Sita"
let status = true;

// global scoped variabled -> can be accessed anywhere



// {}  // block scope
// block scope variable -> can be accessed whin the blcok 
// nOTE : variable declared with var canntot be block scoped

if (status) {
    var name = "Sita R.."; // global scope
    let age = 12; // blocked scope
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }




// console.log("age is ", age);

// console.log("prvious name was", name);





function printName() {
    var brand = "Puma"
    console.log("name is ", name);
}






printName()

console.log(brand);