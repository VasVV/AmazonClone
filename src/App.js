import logo from './logo.svg';
import './App.css';
import Header from './header';
import Dashboard from './dashboard';
import Cart from './cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './login';
import Checkout from './checkout';
import Orders from './orders';
import {auth} from './firebase';
import { useEffect } from 'react';


import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IRxezLeEfBz7v63k9cbeDrQN070PKRpVeqOu6QcDibWFUFf1UpQeBp7P6HTFBQWjVuWr0OCEmUw6UUIuxMACRx500akoLgTlj');


function App() {

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        console.log(authUser);
      }
    })
  },[])

  return (
    
    <Router>
    <div className="App">
    <Header />
    <Switch>
    <Route path='/checkout'>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </Route>

      <Route path='/login'>

        <Login />
      </Route>
          
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
          
        </Switch>
        </div>
    
    
    
    </Router>
    
  );
}

export default App;
