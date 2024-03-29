import axios from 'axios'
import { useState, useEffect } from 'react'
import ImageNotFound from "../assets/images/ImageNotFound.jpg"
import { Link } from "react-router-dom"
import { addToCart } from '../redux/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BUYER, SELLER } from '../constants/role';

export default function Home() {


    const user = useSelector((redux_store) => { return redux_store.user.value })

    const dispatch = useDispatch();
    const [products, setproducts] = useState(null);

    const [isLoadingProduct, setisLoadingProduct] = useState(true);


    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products")
            .then(res => {
                setproducts(res.data.data[0].data)
                setisLoadingProduct(false)
            })
            .catch(err => {

            })
    }, []);

    function handleAddToCart(e, product) {
        e.preventDefault();

        console.log("buttn");
        dispatch(addToCart(product))
    }

    if (isLoadingProduct) {
        return <>
            <div className='home-spinner' style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh"
            }}>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    }

    return (
        <>
            <div>list of products</div>
            <div className="products row">
                {
                    products?.map(product => {
                        return <div className='col-sm-6  col-md-3 p-3'>
                            <Link to={`/products/${product._id}`}>
                                <div class="card product " >

                                    {/* <img src={"https://res.cloudinary.com/dtv8dtpkm/image/upload/v1679221462/cnlv5glezaixgasigxvk.webp"} class="card-img-top" alt="..." /> */}
                                    <img src={product.images[0] || ImageNotFound} class="card-img-top" alt="..." />
                                    {/* <img src={ImageNotFound} class="card-img-top" alt="..." /> */}
                                    <div class="card-body">
                                        <h5 class="card-title ">{product.name}</h5>
                                        <p class="card-text">${product.price}</p>
                                        {
                                            user?.role == BUYER
                                                ?
                                                <button class="btn btn-primary" type='button' onClick={(e) => handleAddToCart(e, product)} >Add to Cart</button>
                                                :
                                                user?.role == SELLER ?

                                                    <>
                                                        <Link to={`/products/edit/${product._id}`}>
                                                            <button class="btn btn-primary" type='button' >edit</button>
                                                        </Link>
                                                        <button class="btn btn-danger mx-2" type='button' >delete</button>
                                                    </>
                                                    :
                                                    null
                                        }
                                    </div>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </>
    )
}
