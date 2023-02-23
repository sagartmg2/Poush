import { Footer } from "./Footer"
import { Link } from "react-router-dom"


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
                <li><Link to='home'>home {true ? "true" : "false"} </Link></li>
                <li><Link to='about'>Abut</Link></li>
                <li><Link to='counter'>counter</Link></li>
                <li><Link to='todos'>Todos</Link></li>
                <li><Link to='login'>login</Link></li>
                <li><Link to='about'>singup</Link></li>
                <li><Link to='orders'>orders</Link></li>
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

