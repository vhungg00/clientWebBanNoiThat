import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CartButton() {
    const carts = useSelector(state => state.carts.cartItems)
    const quantity = carts.reduce((init, item) => {
        return init + item.amount
    }, 0)
    return (
        <Wrapper>
            <Link to="/auth" className="header-links__user">
                <i className="header-links__user-icon fas fa-user"></i>
            </Link>
            <Link to="/cart" className="header-links__cart">
                <i className="header-links__cart-icon ti-bag"></i>
                <span className="quantity-cart">{quantity}</span>
            </Link>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
.header-links__user-icon {
    color: var(--primary-color);
    font-size: 2.5rem;
}

.header-links__cart-icon {
    padding-left: 15px;
    color: var(--primary-color);
    font-size: 3rem;
    position: relative;
}
.quantity-cart {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--sub-color);
    color: var(--width-color);
    font-size: 1.4rem;
    text-align: center;
}
.quantity-cart {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--sub-color);
    color: var(--width-color);
    font-size: 1.4rem;
    text-align: center;
}
`
export default CartButton;