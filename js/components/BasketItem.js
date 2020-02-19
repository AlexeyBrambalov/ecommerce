import React from 'react'
import coins from '../../assets/coins.png'
import bin from '../../assets/bin.png'

export default function BasketItem({item,value}) {
    const{id, title, img, price} = item;
    const {removeItem} = value;
    return (
        <div className="basket-item">
            <img src={img} className="basket-item-image" alt="image"/>
            <div className="basket-item-main">
                <h2 className="basket-item-title">{title}</h2>
                <div className="price-section">
                    <img src={coins} alt="coins" className="img-coins"/>
                    <h4 className="basket-price">{price} Gil</h4>
                </div>
            </div>
            <img src={bin} alt="bin" onClick={() =>removeItem(id)} className="img-bin"/>
        </div>
    )
}
