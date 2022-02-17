import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components'
function PageHero({ tytle, product }) {
    return (
        <Wrapper>
            <div className="grid wide">
                <h3 className="section">
                    <Link to='/'>Home</Link>
                    {product && <Link to='/ product'>/ Products</Link>} / {tytle}
                </h3>

            </div>
        </Wrapper>
    );
}
const Wrapper = style.div`
    margin-top: 58px;
    background: #eaded7;
    width: 100%;
    font-size: 2rem;
    a{
        text-decoration: none;
        padding: 12px;
        color:#795744;
    }
    h3 {
        margin:0;
    }
    a:hover {
        color: var(--primary-color)
    }
`
export default PageHero;

