import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function Create() {
    const [product, setproduct] = useState({
        name: "",
        price: "",
        images: [],
    });

    const { id } = useParams()
    /* check if it is edit page */

    useEffect(() => {
        if (id) {
            let url = `${process.env.REACT_APP_SERVER_URL}/products/${id}`
            axios.get(url)
                .then(res => {
                    setproduct(res.data.data)
                })
        }
    }, []);





    function handleChange(e) {
        if (e.target.name == "images") {
            setproduct({
                ...product, images: [...product.images, ...e.target.files]
            })
        } else {
            setproduct({
                ...product, [e.target.name]: e.target.value
            })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();

        let form_data = new FormData();
        form_data.append("name", product.name)
        form_data.append("price", product.price)

        let temp = [...product.images]
        temp.forEach(img => {
            form_data.append("images", img)

        })

        let method = "POST"
        let url = "https://ecommerce-sagartmg2.vercel.app/api/products"

        if (id) {
            /* 
                CRUD operator

                http methods
                    get  - data fetch
                    post - create data
                    put - update data
                    delelte
            */
            method = "PUT"
            url = `https://ecommerce-sagartmg2.vercel.app/api/products/${id}`
        }

        axios({
            method: method,
            url: url,
            data: form_data,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then(res => {

            }).catch(err => {

            })

        /* 
            form image use data
            https://developer.mozilla.org/en-US/docs/Web/API/data/data
         */
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label required-field">Name</label>
                    <input type="text" class="form-control" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label required-field">price</label>
                    <input type="number" class="form-control" name="price" value={product.price} onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label required-field">Images</label>
                    <input type="file" multiple class="form-control" name="images" onChange={handleChange} />
                    <hr />
                    {
                        product?.images.map(image => {
                            let img_src = "";

                            if (typeof (image) == "string") {
                                img_src = image;
                            } else {
                                img_src = URL.createObjectURL(image)
                            }

                            return <img height={100} width={100} src={img_src} />
                        })
                    }
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
