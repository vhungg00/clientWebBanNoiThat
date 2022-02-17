import { animated, useTrail } from '@react-spring/web';
import React, { forwardRef, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductApi from '../../APIs/productAxios';
import { setProducts } from '../../redux/actions/ProductActions';
import Loading from '../Loading';
export const Products = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ProductApi.getProduct();
                if (response && response.data) {
                    setLoading(false)
                    dispatch(setProducts(response.data.data))
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            {loading && <Loading />}
            {children}
        </div>
    );
}
export const ProductItems = () => {

    const products = useSelector((state) => state.allProducts.products)
    console.log("product: ",products)
    const [listProducts, setListProducts] = useState([...Array(3).keys()])
    const trail = useTrail(listProducts.length, {
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
        <>
            <div className="row">
                {trail.map(({ ...otherProps }, idx) => {
                    if (typeof products[idx] === 'object' && products[idx] !== null) {
                        const { id, image, name, price } = products[idx]
                        return (
                            <animated.div key={idx} className="col l-4 m-6 sm-12 xsm-12 " style={{ ...otherProps }}>
                                <Product id={id} image={image} name={name} price={price} />
                            </animated.div>
                        )
                    }
                })}
            </div>
            {listProducts.length < 6 ? <LoadButton setListProducts={setListProducts} /> : <AllProduct />}
        </>
    )
}
const LoadButton = ({ setListProducts }) => {

    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setLoading(true)
        setListProducts(prevState => (
            [...prevState,
            ...Array.from(Array(3).keys(), n => n + prevState.length)]))
    }
    setTimeout(() => setLoading(false), 400);

    return (
        <button onClick={handleClick} className="btn btn-product">
            {loading ? 'LOADING...' : 'LOAD MORE ITEMS'}
        </button>
    )
}
const AllProduct = () => {
    return (
        <Link to="/product" className="btn" >ALL PRODUCTS</Link>
    )
}
export const Product = forwardRef(({ id, image, name, price }, ref) => {
    return (
        <Wrapper>
            <div className='box-product' ref={ref}>
                <img src={image} alt={name} />
                <Link to={`/productdetail/${id}`} className='link'>
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>${price}</p>
            </footer>
        </Wrapper>
    )
})
export const Wrapper = styled.section`

.box-product {
    position: relative;
    border-radius: var(--radius);
    background-color: var(--clr-black);
    
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    height: 225px;
    transition: var(--transition);

  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 2rem;
      color: var(--clr-white);
    }
  }
  .box-product:hover img {
    opacity: 0.5
  }
  
  .box-product:hover .link {
    opacity: 1;

  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    color: var(--primary-color);
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`

