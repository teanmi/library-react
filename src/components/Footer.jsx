import React from 'react';
import logo from "../assets/Library.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img src={logo} alt="" className='footer__logo--img'/>
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link">Home</a>
            <a href="/" className="footer__link no-cursor">About</a>
            <a href="/books" className="footer__link">Books</a>
            <a href="/cart" className="footer__link">Cart</a>

          </div>
          <div className="footer__copyright">Copyright &copy; 2022 Library</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
