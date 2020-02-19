import React from 'react'
import BasketItem from './BasketItem'


export default function BasketList({value}) {
    const {cart} = value

    return (
        <div className="basket-list">
            {cart.map(item=>{
                return <BasketItem key={item.id} item={item} value={value}/>
            })}            
        </div>
    )
}
