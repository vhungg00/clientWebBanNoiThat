import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { clearCart } from '../redux/actions/CartActions';
import CartColums from './CartColums';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

function CartContent() {
    const carts = useSelector((state) => state.carts.cartItems)
    const dispatch = useDispatch()
    return (
        <Wrapper clasName="grid wide">
            <CartColums />
            {carts.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
            <hr />
            <div className='link-container'>
                <Link to='/products' className='link-btn'>
                    continue shopping
                </Link>
                <button
                    type='button'
                    className='link-btn clear-btn'
                    onClick={() => dispatch(clearCart())}
                >
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    );
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.8rem 1.2rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent;