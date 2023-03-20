import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Show() {

  const [product, setproduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let url = `${process.env.REACT_APP_SERVER_URL}/products/${id}`
    axios.get(url)
      .then(res => {
        setproduct(res.data.data)
      })


  }, []);

  /* 
    product = {}
    product.iamges // undefined
    product.images.map() // error 
  */

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              {
                product.images?.map((image, index) => {
                  return <div class={`carousel-item ${index == 0 ? "active" : ""} `}>
                    <img src={image} class="d-block w-100" alt="..." />
                  </div>
                })
              }
              {/* <div class="carousel-item active">
                <img src="https://picsum.photos/500/500" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://picsum.photos/600/600" class="d-block w-100" alt="..." />
              </div> */}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='col-md-6'>
          <div>

            <h1>{product?.name}</h1>
            <h2>$ {product.price}</h2>
          </div>
          <button className='btn btn-primary'>add to cart</button>

        </div>

      </div>
      <hr />
      <h2>Reviews</h2>
      map revies...

    </div>
  )
}
