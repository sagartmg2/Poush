console.log("__dirname : " + __dirname);
console.log("__dirname : " + __filename);


/* 
node modules 
    - common js module  // module.exports and require
    - es module
*/

/* 
    core module
    local module
    third party module
 */

const fs = require("fs")  // core modules
const path = require("path")
const bcrypt = require('bcrypt');  // third party module

/* const {varaible} = object  // object destructuring. */
const { login } = require("./auth")  // local module  => {login:() =>{},signup=() =>{}}
// const checkToken = require("./checkToken")
const customName = require("./checkToken")
login()
// checkToken();
// customName();


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
