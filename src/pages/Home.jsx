import React from 'react';
import styled from 'styled-components';
import { ProductItems, Products } from '../components/Container/Products';
import Slide from '../components/Container/Slide';
function Home() {
    return (
        <Wrapper>
            <Slide />
            <div className="container">
                <div className="grid wide">
                    <h1 className="heading ">Feature Products</h1>
                    <Products >
                        <ProductItems />
                    </Products >

                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
.container {
    margin-top: 30px;
    background-color: var(--clr-grey-10);
}
.heading {
    font-size: 5rem;
    color: var(--primary-color);
    margin: 0;
    text-align: center;
    line-height: 5rem;
    padding: 50px 0;
    position: relative;
}
.heading:after {
    content: "";
    display: block;
    height: 2.5px;
    width: 150px;
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);
    position: absolute;
    background-color: var(--sub-color);
}

`
export default Home;