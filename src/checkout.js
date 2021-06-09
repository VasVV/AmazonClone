import './checkout.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CheckoutProduct from './checkoutproduct';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
import { useHistory } from 'react-router';
import {db, auth} from './firebase';

export default function Checkout() {

    const elements = useElements();
    const history = useHistory();

    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');

    const dispatch = useDispatch();

    const user = useSelector(state => state.addremovecurruser);
    const products = useSelector(state => state.cart);

    const sum = products.reduce((acc,v) => acc + Number(v[1]),0)

    const stripe = useStripe();
    

    const [error, setError] = useState(null);

    const [sucess, setSucess] = useState('');
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        
        window
          .fetch("http://localhost:4242/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({'amount': sum * 100})
          })
          .then(res => {
            return res.json();
          })
          .then(data => {
            setClientSecret(data.clientSecret);
          });
      }, [products]);

      useEffect(() => {
        
        window
          .fetch("http://localhost:4242/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({'amount': sum * 100})
          })
          .then(res => {
            return res.json();
          })
          .then(data => {
            setClientSecret(data.clientSecret);
          });
      }, []);

    

    const handleSubmit = async e => {
        e.preventDefault();
       
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card:  elements.getElement(CardElement)
          }
        });
        if (payload.error) {
          setError(`Payment failed ${payload.error.message}`);
          
        } else {
            const currUser = auth.currentUser.uid;
            const rndInt = Math.floor(Math.random() * 10000) + 1;
            console.log(products);
            let exists = true;
            let document = {
              orderId: [],
              products: [],
              prices: [],
              ratings: [],
              images: [],
              address: []

            };
            await db.collection('orders').doc(currUser).get().then((doc) => {
              if (doc.exists) {
                  doc = doc.data();
              } else {
                exists = false
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
           

            if (!exists) {
             for (let a = 0; a<products.length; a++) {
                document.orderId.push(clientSecret);
                document.products.push(products[a][0]);
                document.prices.push(products[a][1]);
                document.ratings.push(products[a][2]);
                document.images.push(products[a][3]);
                document.address.push(`${street} ${city}`)
             }
             await db.collection('orders').doc(currUser).set(document)
            } else {
              let colMapped;
              let col =  await db.collection('orders').doc(currUser).get().then(doc => colMapped = doc.data())
              for (let a = 0; a<products.length; a++) {
                colMapped.orderId.push(clientSecret);
                colMapped.products.push(products[a][0]);
                colMapped.prices.push(products[a][1]);
                colMapped.ratings.push(products[a][2]);
                colMapped.images.push(products[a][3]);
                document.address.push(`${street} ${city}`)
             }
             await db.collection('orders').doc(currUser).set(colMapped);
            }

            
          
            

            



          dispatch({type: 'EMPTY_CART'});




          history.push('/orders')  
        }
      };



    return (
        <div className='checkout'>
            <div className='checkout-container'>
            <h1>Checkout - {products.length} items </h1>
                <div className='checkout-section'>
                    
                    <div className='checkout-section-title'>
                        <h3>Delivery address</h3>
                    </div>
                    <div className='checkout-address'>
                        <p>{user.length > 0 && user[0][0]}</p>
                        Your street: <input type='text' className='address-input' onChange={(e) => setStreet(e.target.value)} />
                        <br />
                        Your city: <input type='text' className='address-input' onChange={(e) => setCity(e.target.value)}/>
                    </div>
                </div>

                <div className='checkout-section'>
                    <div className='checkout-section-title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='checkout-items'>
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
                    
                </div>

                 <div className='checkout-section'>

                    <div className='checkout-section-title'>
                        <h3>Enter your card info</h3>
                    </div>
                    <div className='checkout-form'>
                        {error}
                        <form className='payment-form'  onSubmit={(e) => handleSubmit(e)}>
                            <CardElement 
                                options={{
                                    style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                        color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                    },
                                }}
                            />
                            <button type="submit" className='payment-submit-btn' disabled={!stripe}>
                                Pay
                            </button>
                        </form>

                        <CurrencyFormat renderText={(value) => (
                        <>
                        <p>
                        Order total: 
                            <strong> {value}</strong>
                        </p>
                        
                        </>
                        )}

                    decimalScale={2}
                    value={sum}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'€'}
                    />
                    </div>
                </div>    
            </div>

        </div>
    )
}