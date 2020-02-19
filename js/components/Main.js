import React, { Component } from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Basket from './Basket'
import BasketTitle from './BasketTitle'

export default class Main extends Component {
    render() {
        return (
            <div className="body">
                <div className="productlist-wrapper">
                    <Navbar/>
                    <ProductList/>
                </div>
                <div className="basket-wrapper">
                    <BasketTitle/>
                    <Basket/>
                </div>
            </div> 
        )
    }
}




                 {/* <div className="body">
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
                </div>  */}