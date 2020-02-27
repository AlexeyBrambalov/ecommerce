import React, { Component } from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Basket from './Basket'
import BasketTitle from './BasketTitle'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class Main extends Component {
    render() {
        return(
            <ProductConsumer>
                {value => {
                    const {cart}=value;
                    if(cart.length>0){
                        return (
                    <div className="body">
                        <div className="productlist-wrapper">
                            <Navbar/>
                            <ProductList/>
                        </div>
                        <div className="basket-wrapper">
                            <BasketTitle/>
                            <Basket/>
                            <div className="basket-button-area">
                                <Link to="/cart">
                                    <button className="basket-button button">Continue</button>
                                </Link>
                            </div>
                        </div>
                    </div> )
                    } else {
                        return (
                    <div className="body">
                        <div className="productlist-wrapper">
                            <Navbar/>
                            <ProductList/>
                        </div>
                        <div className="basket-wrapper">
                            <BasketTitle/>
                            <Basket/>
                            <div className="basket-button-area">
                                <button className="basket-button button inactive">Continue</button>
                            </div> 
                        </div>
                    </div> 
                    )
                    }
                }}
                </ProductConsumer>
        )   
    }
}


