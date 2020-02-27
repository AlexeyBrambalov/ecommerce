import React from 'react'
import BasketItem from './BasketItem'


export default function BasketList({value}) {
    const {cart, cartTotal} = value

    return (
        <React.Fragment>
            <section className="basket-list">
                {cart.map(item=>{
                    return <BasketItem key={item.id} item={item} value={value}/>
                })}            
            </section>
            <div className="basket-total price">
            <h4 className="basket-total-text">Total</h4>
            <div className="basket-total-price">{cartTotal} Gil</div>
            </div>
        </React.Fragment>
    )
}
