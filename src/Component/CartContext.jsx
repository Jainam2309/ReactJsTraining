import { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";
import { useEffect } from "react";



export const CartContext = createContext();

export function CartProvider ({children}) {

    const[cart,dispatch] = useReducer(CartReducer,[]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cart-data")) || [];
    dispatch({ type: "LOAD_CART", payload: saved });
    },[]);

    useEffect(() => {
        localStorage.setItem("cart-data", JSON.stringify(cart));
    },[cart]);


    return(
        <CartContext.Provider value={{cart,dispatch}}>
            {children}
        </CartContext.Provider>
    );
}