import React, { Component } from 'react'
import Navbar from './Navbar'
import Basket from './Basket'
import CartButton from './CartButton'

export default class Cart extends Component {
    render() {
        return (
            <div className="cart-body">
                <Navbar/>
                <CartButton/>
                <div className="cart-basket">
                    <Basket/>
                </div>
            </div>
        )
    }
}
