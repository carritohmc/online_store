import './cart.css';
import { useContext } from "react";
import StoreContext from "../store/storeContext";
import ProductInCart from '../components/productInCart';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


const Cart = () => {


    const {cart, getCartCount} = useContext(StoreContext);
    const getTotal = () => {

        let total=0;
        for (let i=0; i <cart.length; i++)
        {
            const prod = cart[i];
            total += prod.quantity * prod.price;
        }
        return total.toFixed(2);
    }


    if (cart.length < 1) {
        return (
            <div className='cartDiv'>
            <div className='lineDiv'>
            <h3>Empty Cart</h3>
            <h4>Please add products to your cart</h4>
        <div className='innerDiv'> 
            <h4>Go to <Link to="/catalog"> Catalog</Link>       </h4>

        </div>
        </div>
        </div>

    
    )
    };


    return (
        <div className='cartDiv'>
        <div className='lineDiv'>

        </div>
        <div className='innerDiv'>
        <h3>You have {getCartCount()} products</h3>
            <h3> Please finish your order when ready</h3>
                <div className='summaryAndTotal'>   
            <div className='summaryDiv'>
                {cart.map((p) => (
                    <li>

                        <ProductInCart key={p._id} data={p}> </ProductInCart>
                    </li>
                    
                    ))}

             </div>
            <div className='totalDiv'>

        <h3> Your total is {getTotal()}</h3>
        <div className="cartSideDiv">
        <label className='form-label'>Coupon Code</label>
                    <input type="text"  name='code' className="form-control"/>
                    <button  className="btn btn-dark"> Enter Coupon </button>
                    <button  className="btn btn-dark"> Check Out </button>

        </div>
             </div>

        </div>

                    </div>

        </div>


    );



    
    
}
export default Cart; 