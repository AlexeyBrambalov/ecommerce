import React, { Component } from 'react'

export default class Basket extends Component {
    render() {
        return (
            <div>
            <div className="basket">
                        <h1 className="basket__title">Basket</h1>
                        <h2 className="basket__text">No items</h2>
                        <button className="basket__button">Continue</button>
            </div>
                
            </div>
        )
    }
}
