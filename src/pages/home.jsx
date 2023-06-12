import './home.css';
import {Link} from 'react-router-dom';

const Home = () => {


    return (
        <div className='homeDiv'>
                  <h1 className='h1'> Welcome to the Online Commission Store</h1>

            <h4> Art commissions and custom work</h4>
            <Link className="btn btn-info" aria-current="page" to="/catalog">
        
        {" "}Go To Catalog
            </Link>
        <div className='backgroundDivHome'>

        </div>
        </div>


    );



    
    
}
export default Home; 