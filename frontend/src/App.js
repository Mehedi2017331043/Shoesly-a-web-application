import './App.css';
import Header from "./container/layout/Header/Header.js"
import { BrowserRouter as Router, Route, Routes ,useParams} from "react-router-dom"
import WebFont from "webfontloader"
import React from 'react';
import Footer from './container/layout/Footer/Footer.js'
import Home from "./container/Home/Home.js"
import About from "./container/About/About.js"
import ProductDetails from './container/Product/ProductDetails.js'
import Products from "./container/Product/Products.js"
import Search from "./container/Product/Search.js";
import LoginSignUp from './container/User/LoginSignUp';
function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/singleProduct/:id" element={<ProductDetails />} />
        <Route exact path="/allProducts" element={<Products />} />
        <Route  path="/allProducts/:keyword" element={<Products />} />
        <Route  exact path="/search" element={<Search />} />
        <Route  exact path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </Router>

  )

}

export default App;
