import React, { Component } from 'react'
import EmptyBasket from './EmptyBasket'
import {ProductConsumer} from '../context'
import BasketList from './BasketList'


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
                            </div>

                        )
                    } else {
                        return (
                                <div className="basket">
                                    <EmptyBasket/>
                                </div>
                        )
                    }
                }}
            </ProductConsumer>
            </section>

        )
    }
}
