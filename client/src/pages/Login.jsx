import axios from 'axios';
import { useState } from 'react'

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, seterror] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        let url = "https://ecommerce-sagartmg2.vercel.app/api/users/login"

        axios.post(url, formData)
            .then()
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
