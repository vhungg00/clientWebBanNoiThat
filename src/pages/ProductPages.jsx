import React from 'react';
import styled from 'styled-components';
import Fillter from '../components/Fillter';
import PageHero from '../components/PageHero'
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';
function ProductPages() {
    return (
        <Wrapper>
            <div className="container">
                <PageHero tytle='product' />
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-3">
                            <Fillter />
                        </div>
                        <div className="col l-9">
                            <Sort />
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
`

export default ProductPages;