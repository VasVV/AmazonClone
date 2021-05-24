import React from 'react';
import './product.css';
import StarIcon from '@material-ui/icons/Star';
import SampleProduct from './sampleproduct.jpg'

export default function Product({
    name,
    price,
    rating,
    image
}) {

     const ratingArr = rating ? new Array(Number(rating)).fill(<StarIcon />) : [];

    return (
        <div className='product'>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    <p>{ratingArr.map(e => e) }</p>
                </div>
            </div>
            <div className='product-image-container'>
                <img className='product-image' src={image} />
            </div>
            <div className='add-to-cart-container'>
                <button className='add-to-cart-btn'>Add to cart</button>
            </div>
        </div>
    )
}