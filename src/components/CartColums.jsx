import React from 'react';
import styled from 'styled-components';

function CartColums() {
    return (
        <Wrapper>
            <div className='cart-content'>
                <h5>Item</h5>
                <h5>Price</h5>
                <h5>Quatity</h5>
                <h5>SubTotal</h5>
            </div>
            <hr />
        </Wrapper>
    );
}
const Wrapper = styled.div`
   
        display:none;
        @media (min-width: 776px){
            display:block;
        .cart-content {
            display: grid;
            grid-template-columns: 300px 1fr 1fr 1fr auto ;
            justify-items: center;
            column-gap: 1rem;
            h5 {
                color: var( --clr-grey-5);
                font-weight: 400;
            }
        }
        hr {
        margin-top: 1rem;
        margin-bottom: 3rem;
    }
}
`
export default CartColums;