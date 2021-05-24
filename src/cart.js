import React from 'react';

import './cart.css';
import CurrencyFormat from 'react-currency-format';



export default function Cart() {

    return (

        <div className='cart'>
            <div className='cart-left'>
                <h2>Your cart</h2>
            </div>

            <div className='cart-right'>
                <h2>Your subtotal</h2>
                <div className='subtotal'>
                    
                    <CurrencyFormat renderText={(value) => (
                        <>
                        <p>
                        Subtotal (0) items: 
                            <strong>0</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' />This is a gift
                        </small>
                        </>
                        )}

                    decimalScale={2}
                    value={0}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'€'}
                    />
                <button className='btn-to-checkout'>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}