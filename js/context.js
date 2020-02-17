import React, { Component } from 'react'
import {storeProducts} from './data'

const ProductContext = React.createContext();
//Provider

//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        cart:[]
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () =>{
        let products = [];

        storeProducts.forEach(product => {
            const singleProduct = {...product};
            products = [...products, singleProduct];

        });

        this.setState({ products });
    }

    getItem = id =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        const price = product.price;
        product.total=price;
        this.setState(()=> {
            return{products: tempProducts, cart: [...this.state.cart, product]}
        },()=> {console.log(this.state)})
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,

                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
                
            
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};