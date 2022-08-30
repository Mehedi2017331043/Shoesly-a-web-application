import React from 'react'
import playStore from "../../../images/playStore.png"
import appStore from "../../../images/appStore.png"
import "./Footer.css"
const Footer = () => {
   return (
      <footer id="footer">
         <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App from Android and IOS mobile phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="appstore" />
         </div>

         <div className="midFooter">
            <h1>Shoesly.</h1>
            <p>Feel  Your Every Step</p>
            <p>Copyrights 2022 &copy; Mehedi Hasan & Partha Gosh</p>
         </div>

         <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="http://facebook.com/mehedihasn">Facebook</a>
            <a href="http://facebook.com/parthagosh">Facebook</a>
         </div>
      </footer>
   )
}

export default Footer;