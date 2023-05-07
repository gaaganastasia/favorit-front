import React from "react";
import "./Footer.css";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Footer(props) {

  const footerClassName = `footer ${
    props.isHeaderVisible ?
    `` :
    `footer_hidden`
  }`

  return (
    <footer className={footerClassName}>
      <Link exact="true" to="/">
        <img src={logo} className="footer__logo" alt="Логотип компании"></img>
      </Link>
      <div className="footer__links">
        <div className="footer__section">
          <a href="tel:+71234567890" className="footer__number">+7 123 456-78-90</a>
          <a href="#" className="footer__link">VK</a>
        </div>
        <div className="footer__section">
          <Link to="/catalog" className="footer__link">Каталог</Link>
          <Link to="/terms" className="footer__link">Доставка и оплата</Link>
          <Link to="/return" className="footer__link">Возврат</Link>
          {/* <a href="#" className="footer__link">Акции и скидки</a> */}
          <Link to="/news" className="footer__link">Новости</Link>
          {/* <a href="#" className="footer__link">Отзывы</a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
