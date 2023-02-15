import { Footer } from "./Footer"


/* 
    funcation componnet  OR Header component 
*/

// function sum() {
//     return num1 + num2  // return data types but in react component we return JSX elements 
// }

function Header() {
    return <header>
        {/* <Footer/> */}
        <nav>
            <ul>
                <li><a href='home'>home {true ? "true" : "false"} </a></li>
                <li><a href='about'>Abut</a></li>
            </ul>
        </nav>
    </header>
}

/* 
    defautl export -> only one default export per page
*/
export default Header


/* 
    const signup = () =>{ }


    module.exports = singup  // common 
    export default singup  // es moudle

*/

