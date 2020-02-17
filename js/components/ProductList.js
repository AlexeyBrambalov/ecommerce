import React, { Component } from 'react'
import Product from './Product'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {


    render() {
        return (
            <div className="product-wrapper">
                <ProductConsumer>
                    {(value)=>{
                        return value.products.map( product => {
                            return <Product key={product.id} product ={product}/> 
                            });

                    }}
                </ProductConsumer>


            </div>
        )
    }
}
