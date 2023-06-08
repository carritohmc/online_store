import { createContext } from "react";

// context is a description of the Data
// an interface a plan or blueprint
// it should not have implementation

const StoreContext = createContext({

    cart: [],
    user: {},
    addToCart: () => {},
    removeFromCart: () => {},  

});

export default StoreContext; 