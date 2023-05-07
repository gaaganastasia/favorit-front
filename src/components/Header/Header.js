import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import { Link } from 'react-router-dom'; 

function Header(props) {
  
  const headerClassName = `header ${ 
    props.isHeaderVisible ?
    `` :
    `header_hidden`
}`
  return (
    <header className={headerClassName}>
      <Link exact="true" to="/">
        <img alt="Логотип компании" src={logo} className="header__logo"></img>
      </Link>
      <div className="header__nav">
        <ul
          className="header__nav"
          aria-labelledby="menu"
          aria-label="submenu"
        >
          <li className="header__nav-element">
            <Link to="/catalog">Каталог</Link>
          </li>
          <li className="header__nav-element">
            <Link to="/terms">Доставка и оплата</Link>
          </li>
          <li className="header__nav-element">
            <Link to="/return">Возврат</Link>
          </li>
          {/* <li className="header__nav-element">
            <a href="#">Акции и скидки</a>
          </li> */}
          <li className="header__nav-element">
            <Link to="/news">Новости</Link>
          </li>
          {/* <li className="header__nav-element">
            <a href="#">Отзывы</a>
          </li> */}
        </ul>
      </div>
      {props.isAdmin ?
        <button type="button" onClick={props.onLogOut} className='header__log-out-btn'>Выйти</button>
        :
        <a href="tel:+7123456789" className="header__number">+7 123 456-78-90</a>
      }
      <div className="header__menu-icon" onClick={props.changeNavState}></div>
    </header>
  );
}

export default Header;
