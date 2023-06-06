
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer'
import Catalog from './pages/catalog';
import About from './pages/about';
import Cart from './pages/cart';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import Home from './pages/home';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './pages/admin';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
      <main>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/home' element= {<Home/>}/>
      <Route path='/catalog' element= {<Catalog/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/admin' element= {<Admin/>}/>


    </Routes>
      </main>
     <Footer/>
    </div>

    </BrowserRouter>

  );
}

export default App;
