import React from 'react';
import './header.css';
import Logo from './amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {auth} from './firebase';

export default function Header() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const user = useSelector(state => state.addremovecurruser[0]);

    const signOut = async() => {
        dispatch({type: 'REMOVE_CURR_USER'});
        await auth.signOut();
    }

    return (

        <div className='header'>
           <Link to='/'> <img src={Logo} className='logo'  /> </Link>
            <div className='header-search'>
                <input type='text' placeholder='Search...' className='search-input-header' / >
                <SearchIcon className='search-icon' />
            </div>
            <div className='header-nav'>
            <Link to={ !user ? '/login' : ''}>
                <div className='header-option'>
                    
                    <span className='header-option-one'>
                        Hello, {!user ? 'guest' : user[0]}  
                    </span>
                    <span className='header-option-two'>
                        <button className='signin-signout-btn header-option-two' onClick={user ? () => signOut() : '' }>{!user? 'Sign in' : 'Sign out'}</button>
                    </span>
                    
                </div>
                </Link>
                <Link to={ user ? '/orders' : ''}>
                <div className='header-option'>
                
                <span className='header-option-one'>
                        Returns
                    </span>
                    <span className='header-option-two'>
                        & Orders
                    </span>
                   
                </div>
                </Link>
                <div className='header-option'>
                <span className='header-option-one'>
                        Your
                    </span>
                    <span className='header-option-two'>
                        prime
                    </span>
                </div>

                <div className='header-basket'>
                 <Link to='/cart'>  <div className='basket-icon-div'><ShoppingBasketIcon className='basket-icon' /></div> </Link> 
                    <div>{products.length}</div>
                </div>
            </div>
           
        </div>
    )
}