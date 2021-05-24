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


function App() {
  return (
    
    <Router>
    <div className="App">
    <Header />
    <Switch>
          
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
