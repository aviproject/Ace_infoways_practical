import React, { createContext, useState } from "react";
import { products } from "../constant";

export const ProductsContext = createContext(products);

const ProductsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isloggedIn, setLoggedIn] = useState(false);
  const [product, setProduct] = useState([]);
  const [count , setCount] = useState(1);

  const login = (value) => {
    setLoggedIn(value);
  }

  const addProduct = (product) => {
    setProduct(product);
  }

  const addToCart = (value) => {
    setCartItems([...cartItems, value])
  };

  const onAddCount = (value) => {
    const myCart = product?.filter(function (el)
    {
      return el.productName === value.productName &&
             el.cost === value.cost 
    });
    if(myCart.length > 0){
      setCount(count + 1);
    }
  }

  const onRemoveCount = (value) => {
    if(count !== 1){
      const myCart = product?.filter(function (el)
    {
      return el.productName === value.productName &&
             el.cost === value.cost 
    });
    if(myCart.length > 0){
      setCount(count - 1);
    }
    }else{
      const rmvprod = cartItems?.filter(function (el){
        return el.productName !== value.productName &&
               el.cost !== value.cost
      })
      setCartItems(rmvprod);
    }    
  }

  const removeCartItems = (value) => {
      setCartItems(value);
  }

  const initialState = {
    isloggedIn,
    login,
    product,
    addProduct,
    products,
    cartItems,
    addToCart,
    onAddCount,
    onRemoveCount,
    count,
    removeCartItems
  };

  return (
    <ProductsContext.Provider value={initialState}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
