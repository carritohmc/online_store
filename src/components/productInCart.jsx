import './productInCart.css';

const ProductInCart = (props) => {

    const getTotal = () => {
        const total =props.data.price* props.data.quantity;
        return total.toFixed(2);

    }

    
    return (
        <div className="cart-product"> 

            <img className="cart-images" src={"/images/"+props.data.image} />
            <label>{props.data.title}</label>
            <label>{props.data.category}</label>
            <label>quantity:{props.data.quantity}</label>
            <label>Price:${props.data.price}</label>
            <label>Sub:${props.data.quantity*props.data.price}</label>

            <button className='btn btn-danger btn-sm'><i className="fa-regular fa-trash-can "> </i></button>

            </div>



    );
       
}

export default ProductInCart; 