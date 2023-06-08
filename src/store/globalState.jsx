import { useState } from "react";
import StoreContext from "./storeContext";


const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState ({id: 1234, name: "Felix", email: "something@gmail.com"});

    const addToCart =(product) => {
      
        let cartCopy = [...cart];
        cartCopy.push(product);
        setCart(cartCopy);



    };

    const removeFromCart = () => {
        console.log("Global Function - Remove");
    };
    return (
    
    <StoreContext.Provider value ={{
        cart: cart,
        user: user,
        addToCart:addToCart,
        removeFromCart: removeFromCart
    }}>
        {props.children}

        </StoreContext.Provider>

    );

};

export default GlobalState;