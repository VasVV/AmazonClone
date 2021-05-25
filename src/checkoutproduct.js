import React from 'react';
import './checkoutproduct.css';
import StarIcon from '@material-ui/icons/Star';
import {useDispatch} from 'react-redux';


export default function CheckoutProduct({
    id,
    image,
    title,
    price,
    rating,
    index
}) {


    const dispatch = useDispatch();

    const ratingArr = rating ? new Array(Number(rating)).fill(<StarIcon />) : [];


    const removeFromCart = () => {
        dispatch({type: 'REMOVE_FROM_CART', payload: index});
        
    }

    return (
        <div className='checkout-product'>
            <div>
            <img className='checkout-product-image' src={image} />
            </div>

            <div className='checkout-product-info'>
                <p className='checkout-product-title'>{title}</p>
                <p className='checkout-product-price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout-product-rating'>
                    {ratingArr.map(e => e) }
                </div>

                <button className='remove-btn' onClick={() => removeFromCart()}>Remove from cart</button>

            </div>
        </div>

    )
}