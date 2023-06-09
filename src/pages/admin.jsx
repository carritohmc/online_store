import './admin.css';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';




const Admin = () => {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] =useState([]);

    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);




    useEffect(() => {
      loadData();
    }, []);

    async function loadData() {
        const service = new DataService();
        const prods = await service.getProducts();
        console.log(prods);
        setAllProducts(prods);

        const coupons = await service.getCoupons();
        setAllCoupons(coupons);
    }


    const handleTextChange = (e) =>{
        let text = e.target.value;
        const name =  e.target.name; 

        if (name === 'price') {
            text = parseFloat (text);
        }

        // console.log(name, text);

        // create a copy
        // modify the copy
        // send the copy back with the set
        let copy = {...product}; 
        copy[name] = text;
        setProduct(copy);

    };

const saveProduct = async () => {

    console.log(product);
    ///////
    const service = new DataService();
    const savedProduct = await service.saveProduct(product)
    console.log(savedProduct)

    //add product to allProducts array
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
    };

const handleCouponChange = (e) => {
    let text = e.target.value;
    const name = e.target.name;

    if (name === 'amount') {//amount
        text = parseFloat (text);
    }

    let copy = {...coupon};
    copy[name] = text;
    setCoupon(copy)

}



const saveCoupon = () => {
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
};

const handleDeleteCoupon =  async (id) => {

let service = new DataService();
let response = await service.deleteCoupon(id);
//delete the coupon from allCoupons

let copy = allCoupons.filter((p) => p._id !=id);
setAllCoupons(copy);


}



    return (
        <div className='adminDiv'>

                  <div className='titleDiv'>
                     <h1 className='h1'>Store Admin</h1>
                  </div>

                    <div className='productAndCouponDiv'>
                  <div className='productDiv'>
                    <label className='form-label'>Title</label>
                    <input onBlur={handleTextChange} name="title" type="text" className="form-control"/>
                    
                    <label className='form-label'>Image</label>
                    <input onBlur={handleTextChange} name="image" type="text" className="form-control"/>

                    <label className='form-label'>Category</label>
                    <input onBlur={handleTextChange} name="category" type="text" className="form-control"/>

                    <label className='form-label'>Price</label>
                    <input onBlur={handleTextChange} name="price" type="number" className="form-control"/>

                    <button onClick={saveProduct} className="btn btn-dark"> Save Product </button>
                    
                        <div className='product-list-div'>
                    <ul className='product-list'>
                        {allProducts.map(p => 
                        <li>
                          Title:  {p.title} - Price: ${p.price.toFixed(2)} <button className='btn btn-danger btn-sm'><i className="fa-regular fa-trash-can  "> </i></button>
                        </li>)}
                    </ul>
                       
                        </div>


                  </div>
                  <div className='couponDiv'>
                  <label className='form-label'>Coupon Code</label>
                    <input type="text" onBlur={handleCouponChange} name='code' className="form-control"/>

                    <label className='form-label'>Discount Amount</label>
                    <input type="number" onBlur={handleCouponChange} name='amount' className="form-control"/>

                    <button onClick={saveCoupon} className="btn btn-dark"> Save Coupon </button>
                    <ul className='coupon-list'>
                        {allCoupons.map(p => 
                        <li>
                          Code:  {p.code} - Amount: {p.amount}% <button onClick={()=> handleDeleteCoupon(p._id)} className='btn btn-danger btn-sm'><i className="fa-regular fa-trash-can "> </i></button>
                        </li>)}
                    </ul>

                  </div>
                    </div>

        </div>

    );
    
}
export default Admin; 
