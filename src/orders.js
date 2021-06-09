import './orders.css';  

import {useState} from 'react';
import {auth, db} from './firebase';
import Product from './product';
import React from 'react'

export default function Orders() {



    const [orders, setOrders] = useState([]);
   
    const title = React.createElement('h1', {}, 'My First React Code');
    const getOrders = async () => {
       const currUser = await auth.currentUser.uid;
       
       console.log('curr user id')
       console.log(currUser)
        
       let currUserOrders = '';
        await db
       .collection('orders')
       .doc(currUser)
       .get()
       .then(doc => currUserOrders = doc.data())
        
        console.log(currUserOrders)
       
        console.log('this is user ordsers');
        

        let sortedOrders = {};
        let uniqueOrderIds = [...new Set(currUserOrders.orderId)];
        let products = currUserOrders.products;
        let prices = currUserOrders.prices;
        let ratings = currUserOrders.ratings;
        let images = currUserOrders.images;
        let orderIds = currUserOrders.orderId;
        let address = currUserOrders.address

        for (let a = 0; a<orderIds.length; a++) {
            if (!sortedOrders[orderIds[a]]) {
                sortedOrders[orderIds[a]] = [
                    {products: [],
                    prices: [],
                    ratings: [],
                    images: [],
                    address: ''
                    }
                ]
            } 
                sortedOrders[orderIds[a]][0].products.push(products[a]);
                sortedOrders[orderIds[a]][0].prices.push(prices[a])
                sortedOrders[orderIds[a]][0].ratings.push(ratings[a])
                sortedOrders[orderIds[a]][0].images.push(images[a])
                sortedOrders[orderIds[a]][0].address = address[a];

        }
        console.log(Object.entries(sortedOrders))
           setOrders(Object.entries(sortedOrders));
        }

  

    useState(() => {
        
        getOrders();
    },[])

    return (

        <div className='orders'>
           <h1>My orders</h1>
            {orders.map((e,i) => {
                let x = e[1][0].images.map((el,ind) => {
                    if (ind == 0) {
                        console.log(e[1][0])
                        let address = e[1][0].address;
                    return (
                        <>
                        <h2>Order</h2>
                        <h3>Delivered to: {address}</h3>
                        {e[0]}
    
                        <Product name={e[1][0].products[ind]} price={e[1][0].prices[ind]} rating={e[1][0].ratings[ind]} image={e[1][0].images[ind]} />
    
                        </>
                    )
                    }
                    else return (
                        <>
                        
    
                        <Product name={e[1][0].products[ind]} price={e[1][0].prices[ind]} rating={e[1][0].ratings[ind]} image={e[1][0].images[ind]} />
    
                        </>
                    )
                });
                
                return  x
                
            })
            
            
            }
        </div>
    )
}