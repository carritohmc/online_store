import { useState } from "react";
import StoreContext from "./storeContext";


const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState ({id: 1234, name: "Felix", email: "something@gmail.com"});

    const addToCart = (product) => {
        let cartCopy = [...cart];
        let found = false;
    
        for (let i = 0; i < cartCopy.length; i++) {
            let cartProd = cartCopy[i];
            if (cartProd._id === product._id) {
                found = true;
                cartProd.quantity += product.quantity;
                break; // Exit the loop since the product is found
            }
        }
    
        if (!found) {
            cartCopy.push(product);
        }
    
        setCart(cartCopy);
    };

    const getCartCount = () => {
        let total=0;
        for (let i=0; i<cart.length; i++)
        {
          console.log(cart[i].quantity);
          total+=cart[i].quantity;
        }
        return total; 
    };



    const removeFromCart = () => {
        console.log("Global Function - Remove");
    };
    return (
    
    <StoreContext.Provider value ={{
        cart: cart,
        user: user,
        addToCart:addToCart,
        removeFromCart: removeFromCart,
        getCartCount:getCartCount

    }}>
        {props.children}

        </StoreContext.Provider>

    );

};

export default GlobalState;