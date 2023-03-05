import axios from "axios"
import { useState } from "react"


export default function Signup() {
    // const [name, setname] = useState("defalut");
    // const [email, setEmail] = useState("em");
    // 
    const [submittedOnce, setsubmittedOnce] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        password: ""
    });


    function handleSubmit(event) {
        event.preventDefault()

        // cehck form validtion 

        setsubmittedOnce(true)

        if (submittedOnce) {
            // api call 
            let url = "https://ecommerce-sagartmg2.vercel.app/api/users/signup"
            let data = {
                "name": event.target.name.value,
                "email": event.target.email.value,
                "password": event.target.password.value,
                "role": event.target.role.value,
            }
            axios
                .post(url, data)
                .then(res => {
                    console.log({ res })
                })
                .catch(err => {
                    // console.log({ err })
                    console.log(err.response.data);
                })
        }


    }

    function handleChange(event) {
        console.log(event.target.name);
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label required-field">Name</label>
                    <input type="text" class="form-control" name="name" value={formData.name} onChange={handleChange} />
                    {
                        submittedOnce && !formData.name
                        &&
                        <small>required field</small>
                    }

                </div>
                <div class="mb-3">
                    <label class="form-label required-field">Email address</label>
                    <input type="email" class="form-control" name="email" value={formData.email} onChange={handleChange} />
                    {
                        submittedOnce && !formData.email
                        &&
                        <small>required field</small>
                    }
                </div>
                <div class="mb-3">
                    <label class="form-label required-field">Password</label>
                    <input type="password" class="form-control" name="password" />
                </div>
                <div class="mb-3">
                    <label class="form-label required-field">Role</label>
                    <select class="form-select" aria-label="Default select example" name="role">
                        <option selected value="">Select </option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
