import React from "react";
import './dashboard.css';
import AmazonVideo from './amazon-video.jpg';
import Product from './product.js';
import SampleProduct from './sampleproduct.jpg';



export default function Dashboard() {

    return (

        <div className='dashboard'>
            <div className='dashboard-container'>
                <img src={AmazonVideo} className='dashboard-image' />
            </div>

            <div className='dashboard-products-row'>
                <Product name='Book' price='100' rating='3' image={SampleProduct} />
                <Product />
                <Product />

            </div>
            <div className='dashboard-products-row'>
            <Product />
                <Product />
            </div>
            <div className='dashboard-products-row'>
            <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}