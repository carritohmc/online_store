import './cart.css';
import { useContext } from "react";
import StoreContext from "../store/storeContext";
import ProductInCart from '../components/productInCart';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import DataService from '../services/dataService';


const Cart = () => {

    const[couponText, setCouponText] = useState('');
    const {cart, getCartCount} = useContext(StoreContext);
    const [invalidCoupon, setInvalidCoupon] =useState(false);
    const [coupon, setCoupon] =useState(null);

    const getTotal = () => {

        let total=0;
        for (let i=0; i <cart.length; i++)
        {
            const prod = cart[i];
            total += prod.quantity * prod.price;
        }
        return total.toFixed(2);
    }

    const getTotalWithDiscount = () =>
    {
        let total = getTotal();

        if (!coupon) {
            return total; 
            }
        const discount = (parseFloat(coupon.amount) / 100) * total;
        total = total- discount;
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

    const handleCouponText = (e) => {
        const text = e.target.value;
        setCouponText(text);
    };

    const handleApplyCoupon = async () => {

        const service = new DataService();
        const resp = await service.getCouponByCode(couponText);
        if (resp) {
            setInvalidCoupon(false);
            setCoupon(resp[0]);/////////////////
              // save coupon
        } else {
            setInvalidCoupon(true);
            setCoupon(null)
        }

       
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

        <h3> Your Sub total is {getTotal()}</h3>
        <div className="cartSideDiv">
        <h3 className='totalDiscount'> Your total is {getTotalWithDiscount()}</h3>
        <label className='form-label'>Coupon Code</label>
        {invalidCoupon ? <label className='error'> Invalid Code</label> :null}


                    <input onBlur ={handleCouponText} type="text"  name='code' className="form-control"/>
                    <button  onClick={handleApplyCoupon} className="btn btn-dark"> Enter Coupon </button>
                    <button  className="btn btn-dark"> Check Out </button>

        </div>
             </div>

        </div>

                    </div>

        </div>


    );



    
    
}
export default Cart; 