import "./product.css";

import QuantityPicker from "./quantityPicker.jsx";


const Product = (props) => {

    const handleAdd = () => {
        console.log("Add to Cart")
    }

    return (
        <div className="product"> 

        <img src={"/images/"+props.data.image} />
            <h1>{props.data.title.Product}</h1>
            <h5>{props.data.title}</h5>
            <label> ${props.data.price.toFixed(2)}</label>
            <QuantityPicker/>
            <label htmlFor="Add"></label>
           <button onClick={handleAdd} ><i className="fa-solid fa-cart-shopping"></i></button>

        </div>
    );
}





export default Product; 