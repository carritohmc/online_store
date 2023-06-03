import "./product.css";

import QuantityPicker from "./quantityPicker.jsx";
import { useState } from "react";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        console.log("adding " +quantity +" "+ props.data.title+" to the cart")
    }

    function onQuantityChange(qty) {
        console.log("new value: " +qty);
        setQuantity(qty);
    }

    function displayTotal(price,qty){
        let total = price * qty;
        return total.toFixed(2);

    }

    return (
        <div className="product"> 

        <img src={"/images/"+props.data.image} />
            <h1>{props.data.title.Product}</h1>
            <h5>{props.data.title}</h5>
            <div className="prices"> 
            <label> Price ${props.data.price.toFixed(2)} </label>
            <label> Total ${displayTotal(props.data.price, quantity)}</label>
            </div>

            <QuantityPicker onChange={onQuantityChange}/>
            <label htmlFor="Add"></label>

           <button onClick={handleAdd} type="button" className="btn btn-primary btn-lg btn-block"><i className="fa-solid fa-cart-shopping "></i></button>


        </div>
    );
}





export default Product; 
