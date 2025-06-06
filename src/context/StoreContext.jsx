import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Create and export the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // If item is not in cart, return current state

            const updatedCart = { ...prev };
            if (updatedCart[itemId] === 1) {
                delete updatedCart[itemId]; // Remove item if quantity reaches 0
            } else {
                updatedCart[itemId] -= 1;
            }
            return updatedCart;
        });
    };
//  useEffect(()=>{
// console.log(cartItems);

//  },[cartItems])

const getTotalCartAmount =()=>{
    let totalAmount = 0;
    for(const item in cartItems){
        if(cartItems[item] > 0) {
     
            let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price* cartItems[item];
        }
   

    }
    return totalAmount;
}
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
