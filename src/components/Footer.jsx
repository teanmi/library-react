import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/" className="footer__link no-cursor">About</Link>
            <Link to="/books" className="footer__link">Books</Link>
            <Link to="/cart" className="footer__link">Cart</Link>

          </div>
          <div className="footer__copyright">Copyright &copy; 2022 Library</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
