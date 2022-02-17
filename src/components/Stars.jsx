import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styled from 'styled-components';
function Stars({ stars, reviews }) {
    const tempStart = Array.from({ length: 5 }, (v, index) => {
        const number = index + 0.5
        return (
            <span key={index}>
                {stars > number ? <BsStarFill /> : stars > index ? <BsStarHalf /> : <BsStar />}
            </span>
        )
    })
    return (
        <Wrapper>
            <div className="stars">{tempStart}</div>
            <p className="reviews">({reviews} customer reviews)</p>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    .reviews {
        margin-left: 10px;
        font-size: 1.4rem
    }
    span{
        color: rgb(255, 185, 0);
    }

`
export default Stars;