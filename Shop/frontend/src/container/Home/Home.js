import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import Product from "./Product.js"
import MetaData from '../layout/MetaData'
import { getProduct } from "../../actions/productAction"
import { useSelector, useDispatch } from "react-redux"
import Loader from '../layout/Loader/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(state => state.products)
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch])
  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title="Shoesly" />
          <div className='banner'>
            <h2>Welcome to Shoesly</h2>
            <marquee width="60%" direction="right" height="100px"><h1>FEEL YOUR EVERY STEP</h1></marquee>
            <a href='#container'>
              <button>
                Shop Now
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Product</h2>
          <div className='container' id="container">
            {products && products.map(product => (
              <Product product={product} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home;
