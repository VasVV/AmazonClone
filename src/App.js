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
import {auth} from './firebase';
import { useEffect } from 'react';

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

      <Route path='/login'>

        <Login />
      </Route>
          
          <Route path="/cart">
            <Cart />
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
