import React from 'react'
import ScrollUpButton from 'react-scroll-up-button';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__backToTop">
         <ScrollUpButton /> 
        Back to top
      </div>
      <div className="footer__linkContainer">
        <div className="footer__links">
          <h3 className="footer__linksTitle">Get to Know Us</h3>
          <p className="footer__link">About Us</p>
          <p className="footer__link">Careers</p>
          <p className="footer__link">Press Releases</p>
          <p className="footer__link">Amazon Cares</p>
          <p className="footer__link">Gift a Smile</p>
        </div>
        <div className="footer__links">
          <h3 className="footer__linksTitle">Connect with Us</h3>
          <p className="footer__link">Facebook</p>
          <p className="footer__link">Twitter</p>
          <p className="footer__link">Instagram</p>
        </div>
        <div className="footer__links">
          <h3 className="footer__linksTitle">Make Money with Us</h3>
          <p className="footer__link">Sell on Amazon</p>
          <p className="footer__link">Sell under Amazon Accelerator</p>
          <p className="footer__link">Amazon Global Selling</p>
          <p className="footer__link">Become an Affiliate</p>
          <p className="footer__link">Amazon Pay on Merchants</p>
          <p className="footer__link">Advertise Your Products</p>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer
