import React, { Component } from 'react'
import EmptyBasket from './EmptyBasket'
import {ProductConsumer} from '../context'
import BasketList from './BasketList'
import BasketTotal from './BasketTotal'
import {Link} from 'react-router-dom'


export default class Basket extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
                {value => {
                    const {cart}=value;
                    if(cart.length>0){
                        return(
                            <div className="basket">
                                <BasketList value={value}/>
                                <BasketTotal value={value}/>
                                <Link to="/cart">
                                    <button className="basket-button button">Continue</button>
                                </Link>
                            </div>

                        )
                    } else {
                        return (
                                <div className="basket">
                                    <EmptyBasket/>
                                    <button className="basket-button button inactive">Continue</button>
                                </div>
                        )
                    }
                }}
            </ProductConsumer>
            </section>

        )
    }
}
