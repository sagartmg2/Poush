import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../redux/slice/userSlice";

export default function Navbar() {
    const user = useSelector((redux_state) => redux_state.user.value)
    const cart_items = useSelector((redux_state) => redux_state.cart_items.value)
    const dispatch = useDispatch()

    console.log({ user });

    const handleLogout = () => {

        // localStorage.removeItem("access_token")
        dispatch(logout())

    }

    // let cart_itmes_quanity =  // calcuate each and every cart-items quanity 

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="">Logo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            !user
                            &&
                            <>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/signup">Signup</Link>
                                </li>

                            </>
                        }
                        {
                            user
                            &&
                            <>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/cart">Cart ( {cart_items.length} ) </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/products/create">Create Product  </Link>
                                </li>
                            </>

                        }
                    </ul>
                    <form class="d-flex">
                        {
                            user
                            &&
                            <button class="btn-sm " type="button" onClick={handleLogout}>logout</button>
                        }
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
