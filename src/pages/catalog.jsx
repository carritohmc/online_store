import Product from '../components/product';
import './catalog.css';
import DataService from '../services/dataService';
import { useEffect, useState } from 'react';
import filterButton from '../components/filter';


const Catalog = () => {

    const [allProducts, setAllProducts] = useState([]);

    //use of state variables
    const [categories, setCategories] = useState([]);

 
    // Do something when component loads, and if changes
    useEffect(() => {

        let service = new DataService();
        let prods = service.getProducts();
        setAllProducts(prods);
        loadCatalog();
    }, []);

    function loadCatalog() {
         let cats = ["physical drawing", "digital drawing", "animation", "Clothing"];
         setCategories(cats);
    }

    const funcFilter = filter => {
        let list = [];
        allProducts.forEach(product => {
            if (product.category === filter) list.push(product) 
        })
        console.log(categories);
    }

    return (
        <div className='catalogDiv'>
                  <h3> Check out our amazing catalog below</h3>
            <h5>We currently have {allProducts.length} products available</h5>
         {categories.map ( filter => <button class="btn btn-info" onClick={() => funcFilter(filter)}>{filter}</button> )}
        <div className="catalog">

        {allProducts.map ( prod => <Product key = {prod._id} data = {prod}/>)}


        </div>

        </div>

    );

};

export default Catalog; 