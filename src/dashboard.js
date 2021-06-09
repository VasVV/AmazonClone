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
                <Product name='Submission' price='10' rating='3' image='https://m.media-amazon.com/images/I/51yTNDu18uL.jpg' />
                <Product name='Sony Bravia' price= '1000' rating='4' image='https://images-na.ssl-images-amazon.com/images/I/91%2Bs62FMh6L._AC_SL1500_.jpg'/>
                <Product name='iPhone 10' price='800' rating='5' image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000' />

            </div>
            <div className='dashboard-products-row'>
                <Product name='Sony Home Cinema' price='2000' rating='1' image='https://www.sony.es/image/523bb697bd2b6f911c9e2be3495fba9c?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF' />
                <Product name='World of Warcraft' price='9.99' rating='4' image='https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg' />
            </div>
            <div className='dashboard-products-row'>
                <Product name='Samsung S21' price='700' rating='3' image='https://images.samsung.com/is/image/samsung/p6pim/latin/galaxy-s21/gallery/latin-galaxy-s21-5g-g991-sm-g991bzvjtpa-368316791?$720_576_PNG$' />
                <Product name='Samsung Air Conditioner R32' price='499.99' rating='4' image='https://klivago.com/media/image/product/4948/md/samsung-air-conditioner-r32-wall-unit-ar35-ar12txhqasineu-x-35-kw-i-12000-btu.jpg' />
                <Product name='You dont know JS' price='11.90' rating='5' image='https://images-na.ssl-images-amazon.com/images/I/41ultdqyvXL._SX331_BO1,204,203,200_.jpg'/>
                <Product name='LEGO Jeep' price='49.99' rating='5' image='https://www.lego.com/cdn/cs/set/assets/blt5ca8d7adce06a3a4/42122.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1' />
            </div>
        </div>
    )
}