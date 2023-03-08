import axios from 'axios'
import { useState } from 'react'
import ImageNotFound from "../assets/images/ImageNotFound.jpg"

export default function Home() {

    const [products, setproducts] = useState([]);

    axios.get("https://ecommerce-sagartmg2.vercel.app/api/products")
        .then(res => {
            setproducts(res.data.data[0].data)
        })
        .catch(err => {

        })

    return (
        <>
            <div>list of products</div>
            <div className="products row">
                {
                    products.map(product => {
                        return <div className='col-sm-6  col-md-3 p-3'>
                            <div class="card " >
                                <img src={ImageNotFound} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title ">{product.name}</h5>
                                    <p class="card-text">${product.price}</p>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
