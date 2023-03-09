import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/404.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react"
import axios from "axios";
import { setUser } from "./redux/slice/userSlice";
import { useDispatch } from "react-redux";
import Show from "./pages/product/Show";
import Cart from "./pages/Cart";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    let access_token = localStorage.getItem("access_token")
    if (access_token) {
      let url = `${process.env.REACT_APP_SERVER_URL}/users/get-user`

      axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
        .then(res => {
          dispatch(setUser(res.data))
        })

    }

  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products">
            <Route index element={<Home />} />
            <Route path=":id" element={<Show />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
