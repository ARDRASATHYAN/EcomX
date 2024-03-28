import React, { createContext, useState, useMemo } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log("cartitem", cart);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const contextValue = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart
    }), [cart]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider, CartContext };


