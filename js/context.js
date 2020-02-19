import React, { Component } from 'react'
import {storeProducts} from './data'

//Context API

const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
    state = {
        products: [],
        cart:[],
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
    }
    //Setting products
    setProducts = () =>{
        let products = [];

        storeProducts.forEach(product => {
            const singleProduct = {...product};
            products = [...products, singleProduct];

        });

        this.setState({ products });
    }

    //Finding the product
    getItem = id =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    //Adding product to the bascet
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        this.setState(()=> {
            return{products: tempProducts, cart: [...this.state.cart, product]}
        },()=> {this.addTotal()})
    }

    //Removing the product from the basket
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart=tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index];
        removedProduct.inCart=false;

        this.setState(()=>{
            return {
            cart:[...tempCart],
            products:[...tempProducts]
            }
        },() => {
            this.addTotal();
        } )
    }
    //Counting the total
    addTotal = () =>{
        let total =0;
        this.state.cart.map(item => (total += item.price))
        this.setState(()=>{
            return{
                cartTotal:total
            }
        })

    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart:this.addToCart,
                removeItem:this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
                
            
        )
    }
}

//Consumer

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};