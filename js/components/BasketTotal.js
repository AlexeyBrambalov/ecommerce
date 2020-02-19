import React from 'react'

export default function BasketTotal({value}) {
    const {cartTotal}= value;
    return (
        <div className="basket-total">
            <h4 className="basket-total-text">Total</h4>
            <div className="basket-total-price">{cartTotal} Gil</div>
            
        </div>
    )
}
