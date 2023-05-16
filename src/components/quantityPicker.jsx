import {useState} from 'react';
import './quantityPicker.css';


const QuantityPicker = () => {
const [quantity, setQuantity] = useState(1);

const handleIncrease = () => {

    setQuantity(quantity+1)

};
const handleDecrease = () => {
    
    if (quantity >0){

        setQuantity(quantity-1)
    } 

};

    return (
        <div className='add-product'>
            <button class="btn btn-primary" onClick={handleDecrease} disabled ={quantity===0}>-</button>
            <label>{quantity}</label>
            <button class="btn btn-primary" onClick={handleIncrease}>+</button>

        </div>

    );

};

export default QuantityPicker; 