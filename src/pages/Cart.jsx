import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartContent from '../components/CartContent';
import PageHero from '../components/PageHero';
function Cart() {
    const carts = useSelector((state) => state.carts.cartItems)

    console.log('carts', carts);
    if (carts.length < 1) {
        return (
            <Wrapper>
                <div className="empty">
                    <h2>GIỎ HÀNG TRỐNG</h2>
                    <Link to="/product" className="btn">FILL IT</Link>
                </div>
            </Wrapper>
        )
    }

    return (
        <>
            <PageHero tytle='cart' />
            <div className="grid wide">
                <div className="row col">
                    <Wrapper>
                        <CartContent />
                    </Wrapper>
                </div>
            </div>
        </>
    );
}
const Wrapper = styled.main`
.empty {
    margin-top: 58px;
    padding: 30px 0;
    text-align: center;
    h2 {
        font-size: 2rem;
        color: var(--primary-color);
    }
}
`
export default Cart;