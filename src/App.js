
import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import './assets/css/base.css';
import './assets/css/grid.css';
import './assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css';
import './assets/fonts/themify-icons/themify-icons.css';
import Header from './components/Header';
import About from './pages/About';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductPages from './pages/ProductPages';



function App() {
  const carts = useSelector(state => state.carts.cartItems)
  useEffect(() => {
    localStorage.setItem('cartItem',JSON.stringify(carts))
  },[carts])
  return (
    <Router>
       <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path = "/cart" element={<Cart />} />
            <Route path = "/Auth" element={<Auth />} />
            <Route path= "/productdetail/:productID" element={<ProductDetail />}/>
            <Route path = "/product" element ={<ProductPages />} />
         </Routes>
       </div>
    </Router> 
  );
}

export default App;
