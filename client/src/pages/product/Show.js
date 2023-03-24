import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from "react-rating"
import Star from "../../assets/images/star-full.png"
import EmptyStar from "../../assets/images/star-empty.png"
import { useSelector } from 'react-redux';
import { BUYER } from '../../constants/role';

export default function Show() {

  const [product, setproduct] = useState({});
  const { id } = useParams();
  const [rating_value, setRatingValue] = useState(0);


  const user = useSelector((redux_store) => { return redux_store.user.value })

  function fetchProductDetail() {
    let url = `${process.env.REACT_APP_SERVER_URL}/products/${id}`
    axios.get(url)
      .then(res => {
        setproduct(res.data.data)
      })
  }

  useEffect(() => {

    fetchProductDetail()

  }, []);

  /* 
    product = {}
    product.iamges // undefined
    product.images.map() // error 
  */

  function updateReview(e) {
    e.preventDefault()
    axios.put(`https://ecommerce-sagartmg2.vercel.app/api/products/review/${id}`, {
      rating: rating_value,
      comment: e.target.comment.value
    }, {
      headers: {
        Authorization: "Bear " + localStorage.getItem("access_token")
      }
    }).then(res => {
      fetchProductDetail()
    })
  }

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
            <p>{
              product?.categories?.map(categroy => {
                return <span className='badge bg-secondary ' style={{ marginRight: "0.5rem" }}>{categroy}</span>
              })
            }</p>
            <p>{product.description}</p>
          </div>
          <button className='btn btn-primary'>add to cart</button>

        </div>

      </div>
      <hr />
      <h2>Reviews</h2>
      {
        product?.reviews?.length == 0
        &&
        <p>no reviews yet</p>
      }

      {
        product?.reviews?.map(review => {

          // let temp = new Array(review.rating)

          let temp = [];

          for (let i = 0; i < review.rating; i++) {
            temp.push("")
          }



          console.log({ temp })
          return <div className='p-4 pb-2 mb-2' style={{
            boxShadow: "1px 1px 10px 0px grey"
          }}>
            <p className='mb-0'>{review.created_by.name} {temp.map(el => {
              return <img width={20} src={Star} />
            })} </p>
            <p>{review.comment}</p>
          </div>
        })}

      {
        user?.role == BUYER
        &&
        <>
          <form className='mt-5' onSubmit={updateReview}>
            <div class="mb-3">
              <label for="" class="form-label">Rating</label>
              <Rating
                initialRating={rating_value}
                onChange={(e) => { setRatingValue(e) }}
                emptySymbol={<img width={20} src={EmptyStar} className="icon" />}
                fullSymbol={<img width={20} src={Star} className="icon" />}
              />
              {/* <input type="number" name='rating' class="form-control" id="" aria-describedby="" /> */}
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Comment</label>
              <textarea name="comment" className='form-control'>
              </textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </>
      }
    </div>
  )
}
