import Product from '../components/product';
import './catalog.css';
import DataService from '../services/dataService';
import { useEffect, useState } from 'react';


const Catalog = () => {

    const [allProducts, setAllProducts] = useState([]);

    // Do something when component loads, and if changes
    useEffect(() => {

        let service = new DataService();
        let prods = service.getProducts();
        setAllProducts(prods);
    }, []);

    return (
        <div className='catalogDiv'>
                  <h3> Check out our amazing catalog below</h3>
            <h5>We currently have {allProducts.length} products available</h5>
        <div className="catalog">

{allProducts.map ( prod => <Product key = {prod._id} data = {prod}/>)}


        </div>

        </div>

    );

};

export default Catalog; 