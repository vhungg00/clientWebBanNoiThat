import { useTrail } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function GirdView({ loadProducts }) {
    const trail = useTrail(loadProducts.length, {
        from: {
            opacity: 0,
            transform: 'scale(0)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'
        },
    })
    return (
        <div>
            <div className="row">
                {trail.map(({ ...otherProps }, idx) => {
                    if (typeof loadProducts[idx] === 'object' && loadProducts[idx] !== {}) {
                        const { id, image, name, price } = loadProducts[idx]
                        return (
                            <animated.div key={idx} className="col l-4 m-6 sm-12 xsm-12 " style={{ ...otherProps }}>
                                <Wrapper>
                                    <div className='grid-product'>
                                        <img src={image} alt={name} />
                                        <Link to={`/productdetail/${id}`} className='gird-link'>
                                            <FaSearch />
                                        </Link>
                                    </div>
                                    <footer>
                                        <h5>{name}</h5>
                                        <p>${price}</p>
                                    </footer>
                                </Wrapper>
                            </animated.div>
                        )
                    }
                })}
            </div>
        </div>
    );
}
const Wrapper = styled.div`
    margin-top: 30px;
    .grid-product {
        position: relative;
        background-color: var(--clr-black);
        border-radius: var(--radius);
        img {
            
            justify-content: center;
            width: 100%;
            object-fit: cover;
            border-radius: var(--radius);
            display: block;
            transition: var(--transition);
            height: 160px;


        }
        a{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            
            width: 4rem;
            height: 4rem;
            background-color: var(--sub-color);
            opacity: 0;
            transition: var(--transition);

            svg{
                font-size: 1.6rem;
                color: var(--width-color);
            }
        }
    }
    .grid-product:hover img {
        opacity: 0.5
    }
    .grid-product:hover a{
        opacity: 1;
    }
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h5, p {
            font-size: 1.4rem;
            color: var(--primary-color);
        }
    }
    @media (max-width: 776px){
        .grid-product{
            img{
                height: 400px
            }
        }
    }
`
export default GirdView;