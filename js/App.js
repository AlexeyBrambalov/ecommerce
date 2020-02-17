import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Basket from './components/Basket'
//import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            
                <div className="body">
                    <div className="test">
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component = {ProductList} />
                            <Route path="/cart" component ={Cart} />
                            <Route  component ={Default} />
                        </Switch>
                    </div>
                    <div className="test2">
                        <Basket/>
                    </div>
                

                </div>
            
        );
    }
}
  
  export default App;