import React from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { removeFormCart, toggleAmount } from '../redux/actions/CartActions';
import AmountButton from './AmountButton'
function CartItem({ id, image, name, mainColor, price, amount }) {
  const dispatch = useDispatch()
  const increase = () => {
    dispatch(toggleAmount(id, 'inc'))
  }
  const decrease = () => {
    dispatch(toggleAmount(id, 'dec'))

  }
  return (
    <Wrapper>
      <div className='title'>
        {console.log(name)}
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color :
            <span style={{ backgroundColor: mainColor }} />
          </p>
          <h5 className='price-small'>${price}</h5>
        </div>
      </div>
      <h5 className='price'>${price}</h5>
      <AmountButton amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>${price * amount}</h5>
      <button className='remove-btn' onClick={() => dispatch(removeFormCart(id))}>
        <FaTrash />
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto ;
    justify-items: center;
    column-gap: 1rem;
    justify-items: center;
    margin-bottom: 3rem;
    align-items: center;
    margin-top: 30px;
  .title {
    grid-template-rows: 100px;
    display: grid;
    grid-template-columns: 100px 100px;
    align-items: center;
    text-align: left;
    gap: 2rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
    }
    h2 {
      font-size: 1.2    rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 2rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1.6rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1.6rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 1.6rem;
    }
    .color {
      font-size: 1.6rem;
      span {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 100px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.6rem;
        height: 1.6rem;
        font-size: 1.4rem;
      }
      h2 {
        font-size: 2.5rem;
      }
    }
  }
`
export default CartItem;