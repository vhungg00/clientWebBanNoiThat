import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductApi from '../APIs/productAxios';
import { loadProduct } from '../redux/actions/FillterActions';
import GirdView from './GirdView';
import ListView from './ListView';

function ProductList() {
    const gridView = useSelector(state => state.fillter.gridView)
    console.log('gridView', gridView);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductApi.getProduct()
                if (response && response.data) {
                    dispatch(loadProduct(response.data.data))
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchProducts()
    }, [])
    const loadProducts = useSelector(state => state.fillter.fillterProduct)
    if (typeof loadProducts === 'object' && loadProducts !== {}) {
        if (loadProducts < 1) {
            return (
                <>
                    <h5 style={{ textAlign: 'center' }} >Chưa có sản phẩm nào</h5>
                </>
            )
        }
        if (gridView === false) {
            return <ListView loadProduct={loadProducts} />
        }
        return <GirdView loadProducts={loadProducts} />

    }
}

export default ProductList;