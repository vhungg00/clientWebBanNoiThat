import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductApi from '../APIs/productAxios.js';
import AddToCart from '../components/AddToCart.jsx';
import Loading from '../components/Loading.jsx';
import PageHero from '../components/PageHero.jsx';
import Stars from '../components/Stars.jsx';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/ProductActions';
import './ProductDetail.css';


function ProductDetail() {
    const { productID } = useParams()
    console.log('a',productID);
    const product = useSelector((state) => state.product)
    const [loading, SetLoading] = useState(true)
    const dispatch = useDispatch()
    const fetchProductDetail = async (id) => {
        try {
            const response = await ProductApi.getProductById(id)
            if (response && response.data) {
                SetLoading(false)
                dispatch(selectedProduct(response.data.data))
            }
        }
        catch (error) {
            console.log("error: ", error);
        }

    }



    useEffect(() => {
        if (productID && productID !== "") fetchProductDetail(productID)
        return () => dispatch(removeSelectedProduct())
    }, [productID])

    
    if (typeof product === 'object' && product !== null) {
        const { name, price, images, description, stock, stars, reviews, id: sku, company } = product;
        return (
            <>

                <div className="page-hero">
                    <PageHero tytle={name} product={product} />
                </div>
                <div className="grid wide">
                    {loading && <Loading />}
                    <div className="product-item row">
                        <div className="col l-6">
                            {typeof images !== 'undefined' && <ProductImages images={images} />}
                        </div>
                        <div className="col l-5 l-o-1">
                            <div className="box-right">
                                <h1 className="product-detail-heading">{name}</h1>
                                <Stars stars={stars} reviews={reviews} />
                                <h5 className="price">${price}</h5>
                                <p className="desc">{description}</p>
                                <p className="info"><span>Available : </span>{stock > 0 ? 'In stock' : 'Out of stock'}</p>
                                <p className="info"><span>SKU: </span>{sku}</p>
                                <p className="info"><span>Brand: </span>{company}</p>
                                <span className="line"></span>
                                {typeof product !== 'undefined' && stock > 0 && <AddToCart product={product} />}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}


const ProductImages = ({ images = [[]], loading }) => {
    const [main, setMain] = useState(images[0])

    return (
        <div className="box-left">
            <img src={main.url} alt="" className="main-img" />
            <div className="gallery">
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image.url}
                            alt=""
                            className={`${main.url === image.url ? 'active' : null}`}
                            onClick={() => setMain(images[index])}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default ProductDetail;