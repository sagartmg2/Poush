import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function Create() {
    const [product, setproduct] = useState({
        name: "",
        price: "",
        description: "",
        images: [],
        categories: []
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
        form_data.append("description", product.description)

        product.categories.forEach(category => {
            form_data.append("categories[]", category)
        })


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

    function addCategory() {
        let temp = product.categories // []
        temp.push("")

        setproduct({
            ...product, categories: temp
        })
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
                    <label class="form-label">Categories <button class="btn btn-sm btn-secondary" onClick={addCategory} >add new </button></label>
                    {
                        product.categories.map((category, index) => {
                            return <div className='d-flex align-items-center mb-2'>
                                <input type="" class="form-control  " name="" value={category} onChange={(e) => {
                                    let temp = product.categories
                                    temp = temp.map((el, idx) => {
                                        if (index == idx) {
                                            return e.target.value
                                        }
                                        return el
                                    })

                                    setproduct({ ...product, categories: temp })
                                }} />
                                <button className='mx-2  btn btn-danger btn-sm' onClick={() => {
                                    let temp = product.categories
                                    temp = temp.filter((el, idx) => {
                                        if (index != idx) {
                                            return true
                                        }
                                        return false
                                    })

                                    setproduct({ ...product, categories: temp })

                                }} > - </button>
                            </div>
                        })
                    }

                </div>
                <div class="mb-3">
                    <label class="form-label ">Description</label>
                    <textarea class="form-control" name="description" value={product.description} onChange={handleChange} />
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
