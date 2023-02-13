

function login() {
    console.log("is logged in")
}

function signup() {
    console.log("signupp...");
}


/* 
    default export -- only one per moudle
    named export
 */

// module.exports = login  // default export  =>  () =>

module.exports.login = login  // named export  => {login:() =>{}}
module.exports.signup = signup // named export

module.exports = {
    login: login,
    signup: signup
}

/* 
named export 
 */
module.exports = {
    login,
    signup
}