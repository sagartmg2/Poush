import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";


export default function Signup() {
    // const [name, setname] = useState("defalut");
    // const [email, setEmail] = useState("em");
    // 
    const [submittedOnce, setsubmittedOnce] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        password: ""
    });

    const [error, setError] = useState({
        name: "",
        email: "",
    });


    function handleSubmit(event) {
        event.preventDefault()


        setsubmittedOnce(true)
        let validFormData = true;

        // cehck form validtion 
        if (!formData.name) {
            validFormData = false
            setError((prev) => {
                return {
                    ...prev, name: "required"
                }
            })
        }

        if (!formData.email) {
            validFormData = false
            setError((prev) => {
                return {
                    ...prev, email: "required"
                }
            })
        }
        if (!formData.password) {
            validFormData = false
            setError((prev) => {
                return {
                    ...prev, password: "required"
                }
            })
        }
        if (!formData.role) {
            validFormData = false
            setError((prev) => {
                return {
                    ...prev, role: "required"
                }
            })
        }

        // if error = {email: "E-mail already in use", password: ""}

        let error_values = Object.values(error)
        error_values.forEach(err => {
            if (err) {
                validFormData = false
            }
        })


        if (validFormData) {
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
                    navigate("/login")
                })
                .catch(err => {
                    // console.log({ err })
                    console.log(err.response.data);
                    let errors = err.response.data.errors

                    let temp = {}

                    errors.forEach(el => {
                        temp[el.param] = el.msg
                    })

                    setError(temp)
                })
        }


    }

    function handleChange(event) {
        console.log(event.target.name);
        setFormData({ ...formData, [event.target.name]: event.target.value })
        setError({ ...error, [event.target.name]: event.target.value ? "" : "required" })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label required-field">Name</label>
                    <input type="text" class="form-control" name="name" value={formData.name} onChange={handleChange} />
                    {
                        submittedOnce && error.name
                        &&
                        <ErrorMessage msg={error.name} />
                    }

                </div>
                <div class="mb-3">
                    <label class="form-label required-field">Email address</label>
                    <input type="email" class="form-control" name="email" value={formData.email} onChange={handleChange} />
                    {
                        submittedOnce && error.email
                        &&
                        <ErrorMessage msg={error.email} />
                    }
                </div>
                <div class="mb-3">
                    <label class="form-label required-field">Password</label>
                    <input type="password" class="form-control" name="password" onChange={handleChange} />
                    {
                        submittedOnce && error.password
                        &&
                        <ErrorMessage msg={error.password} />
                    }

                </div>
                <div class="mb-3">
                    <label class="form-label required-field">Role</label>
                    <select class="form-select" aria-label="Default select example" name="role" onChange={handleChange}>
                        <option selected value="">Select </option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                    {
                        submittedOnce && error.role
                        &&
                        <ErrorMessage msg={error.role} />
                    }

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
