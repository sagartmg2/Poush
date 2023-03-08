import axios from 'axios';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/slice/userSlice';

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: "b@b.com",
        password: "password"
    });

    const [error, seterror] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        let url = `${process.env.REACT_APP_SERVER_URL}/users/login`

        axios.post(url, formData)
            .then((res) => {

                dispatch(setUser(res.data.user)) // cannot call setUser function direction, instaed we should use dispatch

                localStorage.setItem("access_token", res.data.access_token)

                navigate("/")

                /* setup user data in redux */

            })
            .catch(err => {
                seterror(err.response.data.msg)
            })
    }


    function handleChange(event) {
        console.log(event.target.name);
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
        <div>
            {
                error
                &&
                <div class="alert alert-danger" role="alert">
                    {error}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label required-field">Email address</label>
                    <input type="email" class="form-control" name="email" value={formData.email} onChange={handleChange} />

                </div>
                <div class="mb-3">
                    <label class="form-label required-field">Password</label>
                    <input type="password" class="form-control" value={formData.password} name="password" onChange={handleChange} />

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
