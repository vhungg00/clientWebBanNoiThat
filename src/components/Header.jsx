import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import CartButton from './CartButton';
import './Header.css'
import SideBar from './SideBar';
import { useDispatch } from 'react-redux';
import { openSideBar } from '../redux/actions/ProductActions';
function Header() {

    const dispatch = useDispatch()
    return (
        <header className="header">
            <div className="grid wide">
                <div className="toolbar">
                    <div className="header-logo">
                        <a href="#" className="header-logo-link">
                            <img src="./assets/images/logo.656e1d77.svg" alt="" />
                        </a>
                    </div>

                    <div className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-list__item">
                                <Link to="/" className="header-nav-list__item-link">
                                    Home
                                </Link>
                            </li>
                            <li className="header-nav-list__item">
                                <Link to="/about" className="header-nav-list__item-link">About</Link></li>
                            <li className="header-nav-list__item">
                                <Link to="/product" className="header-nav-list__item-link">Product</Link></li>
                        </ul>
                    </div>
                    <div className="header-links">
                        <CartButton />
                    </div>
                    <button
                        onClick={() => dispatch(openSideBar())}
                        className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
            </div>
            <SideBar />

        </header>
    );
}

export default Header;