console.log("__dirname : " + __dirname);
console.log("__dirname : " + __filename);


/* node modules */

/* 
    core module
    local module
    third party module
 */

const fs = require("fs")
const path = require("path")
const bcrypt = require('bcrypt');

/* const {varaible} = object  // object destructuring. */
const { login } = require("./auth")  // local module  => {login:() =>{},signup=() =>{}}

login()


let new_path = path.join(__dirname, "custom.txt")

fs.writeFileSync(new_path, "data for text file")
let data = fs.readFileSync(new_path, { encoding: "utf-8" })
console.log(data);
// console.log(data.toString());


function generatePasword() {

    bcrypt.hash("12345678", 10, function (err, hash) {
        console.log(hash)
    });
}

generatePasword()
