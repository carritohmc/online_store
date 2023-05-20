import {useState} from 'react';
import './quantityPicker.css';


const QuantityPicker = (props) => {
const [quantity, setQuantity] = useState(1);

const handleIncrease = () => {

    setQuantity(quantity + 1);
    props.onChange(quantity + 1); //notify the parent component 

};
const handleDecrease = () => {
    
    if (quantity >0){

        setQuantity(quantity-1);
        props.onChange(quantity - 1); //notify the parent component  quantityPicker is child of products
    } 

};

    return (
        <div className='add-product'>
            <button className="btn btn-primary" onClick={handleDecrease} disabled ={quantity===0}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-primary" onClick={handleIncrease}>+</button>

        </div>

    );

};

export default QuantityPicker; 