import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { totalMoney } from '../redux/actions/CartActions';

function CartTotals() {
    const carts = useSelector(state => state.carts.cartItems)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(totalMoney())
    }, [carts])
    const total = useSelector(state => state.carts.total_amount)
    console.log(total);
    const shippingFee = useSelector(state => state.carts.shipping_fee)
    return (
        <Wrapper>
            <div>
                <header>
                    <h5>Subtotal: <span>${total}</span></h5>
                    <p>Shipping fee: <span>${shippingFee}</span></p>
                    <hr />
                    <h4>Oder Total: <span>${total + shippingFee}</span></h4>
                </header>
                <button className="btn">Login</button>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;

header {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 2rem;
}
h4, h5,p {
    display: grid;
    grid-template-columns: 200px 1fr;
}
h5{
    font-size: 1.6rem;
    color: var(--clr-grey-1);
}

h4{
    font-size: 2.5rem;
    color: var(--clr-grey-1);

}
@media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`
export default CartTotals;