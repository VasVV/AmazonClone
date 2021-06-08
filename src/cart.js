import React from 'react';

import './cart.css';
import CurrencyFormat from 'react-currency-format';
import {useSelector} from 'react-redux';
import CheckoutProduct from './checkoutproduct';
import {Link} from 'react-router-dom';


export default function Cart() {

    const products = useSelector(state => state.cart);
    const user = useSelector(state => state.addremovecurruser);
    console.log(products)
    const sum = products.reduce((acc,v) => acc + Number(v[1]),0)
  


    return (

        <div className='cart'>
            <div className='cart-left'>
                
                <h2>Your cart</h2>
                {user.length>0&&user[0][0]}
                {
                    products.map((e,i) => {
                        return (
                            <CheckoutProduct
                            image={e[3]}
                            title={e[0]}
                            price={e[1]}
                            rating={e[2]}
                            index = {i}
                            />
                        )
                    })
                }

            </div>

            <div className='cart-right'>
                <h2>Your subtotal</h2>
                <div className='subtotal'>
                    
                    <CurrencyFormat renderText={(value) => (
                        <>
                        <p>
                        Subtotal {products.length} items: 
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' />This is a gift
                        </small>
                        </>
                        )}

                    decimalScale={2}
                    value={sum}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'€'}
                    />
                <Link to={products.length > 0 && '/checkout'}><button className='btn-to-checkout'>Proceed to checkout</button></Link>
                </div>
            </div>
        </div>
    )
}