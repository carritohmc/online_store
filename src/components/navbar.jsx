import "./navbar.css";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import StoreContext from "../store/storeContext";

const Navbar = () => {
const {cart, user, getCartCount} = useContext(StoreContext);

    return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      Art Colmado
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/catalog">
            Catalog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">
            Admin
          </Link>
        </li>



      </ul>


      <form className="d-flex" role="search">
      <label className="lbl-user">
      <i class="i-user fa-solid fa-user-pen"></i>
        {user.name}
        </label>
        <Link className="btn btn-outline-dark" aria-current="page" to="/cart">
        <span className="badge text-bg-dark"> {getCartCount()}</span>
        {" "}View Cart
            </Link>




      </form>
    </div>
  </div>
</nav>


        
    );
}





export default Navbar; 
