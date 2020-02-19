import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Default from './components/Default';
import Main from './components/Main'


class App extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/" component = {Main} />
                <Route path="/cart" component ={Cart} />
                <Route  component ={Default} />
            </Switch>

        );
    }
}
  
  export default App;