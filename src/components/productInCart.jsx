import './productInCart.css';
import StoreContext from "../store/storeContext";
import { useContext, useState } from "react";

const ProductInCart = (props) => {

    const removeFromCart = useContext(StoreContext).removeFromCart;

    const getTotal = () => {

        const total =props.data.price* props.data.quantity;
        return total.toFixed(2);

    }

    const handleRemove = () => {

        removeFromCart(props.data._id); 
    }

    
    return (
        <div className="cart-product"> 

            <img className="cart-images" src={"/images/"+props.data.image} />
            <label>{props.data.title}</label>
            <label>{props.data.category}</label>
            <label>quantity:{props.data.quantity}</label>
            <label>Price:${props.data.price}</label>
            <label>Sub:${props.data.quantity*props.data.price}</label>

            <button onClick={handleRemove}  className='btn btn-danger btn-sm'><i className="fa-regular fa-trash-can "> </i></button>

            </div>



    );
       
}

export default ProductInCart; 