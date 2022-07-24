import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Product({id,title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    console.log("the basket contains>>>>> ",basket)

    const addToBasket = () => {
        // dispatch the item into the data layer
        toast.success("Product added to your basket");
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };


      

      

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className="product_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
            {Array(rating).fill().map((_,i)=>(
                 <p>⭐</p>
            ))}
            </div>
        </div> 
        <img src={image} alt="" /> 
        <button onClick={addToBasket} >Add to Basket</button>
        <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
  )
}

export default Product
