import axios from 'axios';
import React, { useState } from 'react'

export default function Create() {
    const [formData, setformData] = useState({
        name: "",
        price: ""
    });

    function handleChange() {

    }

    function handleSubmit(e) {
        e.preventDefault();
        let url = "https://ecommerce-sagartmg2.vercel.app/api/products"

        axios.post(url, {
            name: "create page",
            price: 100
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })

        /* 
            form image use formData
            https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
         */
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label required-field">Name</label>
                    <input type="text" class="form-control" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label required-field">price</label>
                    <input type="number" class="form-control" name="price" value={formData.price} onChange={handleChange} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
