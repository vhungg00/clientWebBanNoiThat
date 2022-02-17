import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { addToCart } from '../redux/actions/CartActions';
import AmountButton from './AmountButton';

function AddToCart({ product }) {
    const { id, stock, colors } = product;
    console.log(colors);
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1);
    const [mainColor, setMainColor] = useState(colors[0])
    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1;
            if (tempAmount > stock) tempAmount = stock;
            return tempAmount
        })
    }
    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1;
            if (tempAmount < 1) tempAmount = 1;
            return tempAmount;
        })
    }
    return (
        <Wrapper>
            <div className="colors">
                <span>colors: </span>
                <div>
                    {colors.map((color, index) => {
                        return (
                            <button key={index}
                                style={{ backgroundColor: color }}
                                className={`${mainColor === color ? 'color-btn activecolor' : 'color-btn'}`}
                                onClick={() => setMainColor(color)}
                            >
                                {mainColor === color ? <FaCheck /> : null}
                            </button>)
                    })}
                </div>
            </div>
            <div className="container-btn">
                <AmountButton increase={increase} decrease={decrease} amount={amount} />
            </div>
            <button
                href=""
                className='btn'
                onClick={() => dispatch(addToCart(id, mainColor, amount, product))}
            >ADD TO CART</button>

        </Wrapper>

    );
}
const Wrapper = styled.section`
    margin-top: 30px;
    .colors {
        display: grid;
        grid-template-columns: 125px 1fr;
        align-items: center;
        margin-bottom: 30px;
        span {
            color: var(--primary-color);
            font-weight: 700;
            font-size: 1.6rem;
            text-transform:capitalize;
        }   
        div {
            display: flex;
        }
    }
    .color-btn {
        opacity: 0.5;
        width: 20px;
        height: 20px;

        display: flex;
        border-radius: 50%;
        background: #222;

        margin-right: 8px;
        align-items: center;
        justify-content: center;

        border: none;
        svg {
            color: var(--width-color);
        }
    }
    .activecolor {
        opacity: 1;
    }
    
`

export default AddToCart;