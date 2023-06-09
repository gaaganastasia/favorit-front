import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from 'react-router-dom'; 

function Main(props) {
  React.useEffect(() => {
    props.getProducts();
    props.setIsHeaderVisible(true);
  }, []);

  return (
    <div className="main">
      <SearchForm
          products={props.products}
          getProducts={props.getProducts}
          searchedProducts={props.searchedProducts}
          submitSearchForm={(v) => props.submitSearchForm(v)}
          setErr={props.setIsNotFoundErrVisible}
          setProducts={props.setProducts}
          cartItems={props.cartItems}
          history={props.history}
          isSearching={props.isSearching}
          setIsSearching={props.setIsSearching}
          setSearchedProducts={props.handleSearchedProducts}
          request={props.request}
          setRequest={props.setRequest} />

      <section className="main__catalog">
        <h1 className="main__catalog-title">Каталог</h1>
        <div className="main__catalog-section">
          <p className="main__catalog-name">Фаворит</p>
          {/* <p className="catalog__description">Описание</p> */}
          <Link to="/catalog" className="main__catalog-link">Перейти к товарам</Link>
        </div>
      </section>
      <section className="main__benefits benefits">
        <h2 className="benefits__title">Почему мы?</h2>
        <div className="benefits__container">
          <div className="benefits__group">
            <div className="benefits__benefit">
              <p className="benefits__number">01</p>
              <p className="benefits__description">Доставка товаров в день заказа</p>
            </div>
            <div className="benefits__benefit">
              <p className="benefits__number">02</p>
              <p className="benefits__description">Подарок при каждом онлайн-заказе</p>
            </div>
            <div className="benefits__benefit">
              <p className="benefits__number">03</p>
              <p className="benefits__description">Большие скидки, щедрые бонусы и горячие акции</p>
            </div>
            <div className="benefits__benefit">
              <p className="benefits__number">04</p>
              <p className="benefits__description">Мгновенный возврат некачественных товаров</p>
            </div>
          </div>
          <div className="benefits__icon benefits__icon_delivery"></div>
          <div className="benefits__icon benefits__icon_gift"></div>
          <div className="benefits__icon benefits__icon_discount"></div>
          <div className="benefits__icon benefits__icon_reset"></div>
        </div>
      </section>
    </div>
  );
}

export default Main;
