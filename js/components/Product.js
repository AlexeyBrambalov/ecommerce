import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import coins from '../../assets/coins.png'

export default class Product extends Component {
    render() {
        const {id, title, img, info, price, inCart} = this.props.product;
        return (
        
            <ProductConsumer>
            {(value)=>(
                <div className="card">

                    <div className="card-left">
                        <img src={img} alt="image" className="card-img"/>
                    </div>
                    <div className="card-right">
                        <h2 className="card-title">{title}</h2>
                        <h4 className="card-descr">{info}</h4>
                        <div className="price-section">
                            <img src={coins} alt="coins" className="img-coins"/>
                            <h4 className="price">{price} Gil</h4>
                        </div>

                        <button className="card-button"
                         disabled={inCart ? true : false}
                         onClick={()=> value.addToCart(id)}>Add To Basket</button>

                    </div>
                    </div>
            )}
            </ProductConsumer>
            
        )
    }
}


