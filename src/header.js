import React from 'react';
import './header.css';
import Logo from './amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
export default function Header() {


    return (

        <div className='header'>
           <Link to='/'> <img src={Logo} className='logo'  /> </Link>
            <div className='header-search'>
                <input type='text' placeholder='Search...' className='search-input-header' / >
                <SearchIcon className='search-icon' />
            </div>
            <div className='header-nav'>
                <div className='header-option'>
                    <span className='header-option-one'>
                        Hello, guest
                    </span>
                    <span className='header-option-two'>
                        Sign in
                    </span>
                </div>
                <div className='header-option'>
                <span className='header-option-one'>
                        Returns
                    </span>
                    <span className='header-option-two'>
                        & Orders
                    </span>
                    
                </div>
                <div className='header-option'>
                <span className='header-option-one'>
                        Your
                    </span>
                    <span className='header-option-two'>
                        prime
                    </span>
                </div>

                <div className='header-basket'>
                    <div className='basket-icon-div'><ShoppingBasketIcon className='basket-icon' /></div>
                    <div>0</div>
                </div>
            </div>
           
        </div>
    )
}