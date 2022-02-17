import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { closeSideBar } from '../redux/actions/ProductActions';
import CartButton from './CartButton';

function SideBar() {
    const sideBars = useSelector(state => state.sideBars.isSideBarOpen)
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <nav
                onClick={() => dispatch(closeSideBar())}
                className={`${sideBars ? 'side-bar open' : 'side-bar'}`}>
                <div className="container-side-bar">
                    <button
                        onClick={() => dispatch(closeSideBar())}
                        className="btn-times">
                        <i className="fas fa-times"></i>
                    </button>
                    <ul className="side-bar__list">
                        <li
                            className="side-bar__list-item">
                            <Link to="/"
                                onClick={() => dispatch(closeSideBar())}
                            >Home</Link></li>
                        <li
                            onClick={() => dispatch(closeSideBar())}
                            className="side-bar__list-item">
                            <Link to="/about">About</Link></li>
                        <li
                            onClick={() => dispatch(closeSideBar())}
                            className="side-bar__list-item">
                            <Link to="/product">Product</Link></li>
                    </ul>
                    <div className="footer">
                        <CartButton />
                    </div>
                </div>
            </nav>
        </Wrapper>
    );
}
const Wrapper = styled.div`

.side-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: flex-end;
    transform: translateX(100%);
    transition: all ease 0.2s;
}

.container-side-bar {
    display: flex;
    width: 40%;
    max-width: 40%;
    height: 100vh;
    background-color: var(--width-color);
    display: flex;
    flex-direction: column;

}
.btn-times {
    border: none;
    background-color: transparent;
    color: var(--sub-color);
    font-size: 3rem;
    border-bottom: 1px solid var(--clr-grey-10);
    display: block;
    width: 100%;
    padding: 1rem;
    cursor: pointer;
}
.side-bar__list {
    padding-left: 0;
    margin: 0;
}
.side-bar__list-item {
    transition: all ease 0.4s;
    cursor: pointer;
}
.side-bar__list-item a {
    padding: 2rem 1.5rem;
    font-size: 1.6rem;
    color: var(--clr-grey-3);
    display:block;
    line-height: 1.6rem;
    
}
.side-bar__list-item:hover {
    padding-left: 2.2rem;
    background-color: var(--clr-grey-10);
}

.side-bar__list-item:last-child {
    border-bottom: 1px solid var(--clr-grey-10);
}
.footer {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
.side-bar.open {
    transform: translateX(0);

}


`
export default SideBar;