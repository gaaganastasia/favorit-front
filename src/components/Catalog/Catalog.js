import React from "react";
import "./Catalog.css";
import FilterCatalog from "../FilterCatalog/FilterCatalog";
import SearchForm from "../SearchForm/SearchForm";
import ProductsList from "../ProductsList/ProductsList";
import { Link } from 'react-router-dom'; 
import Preloader from "../Preloader/Preloader";

function Catalog(props) {
  React.useEffect(() => {
    props.setIsHeaderVisible(true);

    if (!props.isSearching) {
      props.getProducts()
    }
    
    props.getPhotos()
    props.tokenCheck()
    props.setFilters([])
  }, []);


  // React.useEffect(() => {
  //   props.tokenCheck();
  // }, [props.isAdmin]);

  // React.useEffect(() => {
  //   props.handleSearchedProducts(props.searchedProducts)
  // }, [props.searchedProducts]);

  // const [searchedProducts, setSearchedProducts] = React.useState(props.products);

  // function handleSearchedProducts(products) {
  //   setSearchedProducts(products);
  // }

  return (
    <section className='catalog'>
      <FilterCatalog
        checkboxesStates={props.checkboxesStates}
        handleCheckboxesStates={props.handleCheckboxesStates}
        handleFilterChange={props.handleFilterChange}
        filters={props.filters}
        searchedProducts={props.searchedProducts}
      />
      <div className="catalog__container">
        <SearchForm
          products={props.products}
          getProducts={props.getProducts}
          searchedProducts={props.searchedProducts}
          submitSearchForm={(v) => props.submitSearchForm(v)}
          setErr={props.setIsNotFoundErrVisible}
          setProducts={props.setProducts}
          cartItems={props.cartItems}
          history={props.history}
          request={props.request}
          setRequest={props.setRequest}
          isSearching={props.isSearching}
          setIsSearching={props.setIsSearching}
          setSearchedProducts={props.handleSearchedProducts} />

        <div className="catalog__title" onClick={props.changeMobileFilterState}>
          <p className="catalog__title-text">Фильтр</p>
          <div className="catalog__title-icon"></div>
        </div>
        <div className="catalog__link-container">
          {/* <button type="button" onClick={props.onLogOut} className={`catalog__log-out-btn ${props.isAdmin ? 'catalog__log-out-btn_visible' : ''}`}>Выйти</button> */}
          <Link to='/add-product' className={`catalog__add-product-link ${props.isAdmin ? 'catalog__add-product-link_visible' : ''}`}>Добавить товар</Link>
          {/* {!(props.searchedProducts.length > 0) && <p className="news__no-news-message">Товары не найдены</p>} */}

          {props.isSearching ? (
            (props.isLoading || props.searchedProducts.length === 0) ? (
              (props.isNotFoundErrVisible) ?
                <h2 className='catalog__warning catalog__warning_visible'>Ничего не найдено</h2>
              :
                <Preloader />
            ) : (
              <>
                <ProductsList 
                  products={props.searchedProducts}
                  getProducts={props.getProducts}
                  filters={props.filters}
                  getProductState={props.getProductState}
                  cartItems={props.cartItems}
                  addProduct={(product) => props.addProduct(product)}
                  setProductPageId={props.setProductPageId}
                  submitSearchForm={(v) => props.submitSearchForm(v)}
                ></ProductsList>
              </>
            )
          ) : (
            (props.isLoading || props.products.length === 0) ? (
              (props.isNotFoundErrVisible) ?
                <h2 className='catalog__warning catalog__warning_visible'>Ничего не найдено</h2>
              :
                <Preloader />
            ) : (
              <>
                <ProductsList 
                  products={props.products}
                  getProducts={props.getProducts}
                  filters={props.filters}
                  getProductState={props.getProductState}
                  cartItems={props.cartItems}
                  addProduct={(product) => props.addProduct(product)}
                  setProductPageId={props.setProductPageId}
                  submitSearchForm={(v) => props.submitSearchForm(v)}
                ></ProductsList>
              </>
            )
          )
        }

          {/* {(props.isLoading || props.products.length === 0 || props.searchedProducts.length === 0) ? (
          <Preloader />
        ) : (
          <>
            <ProductsList 
              products={props.products}
              getProducts={props.getProducts}
              filters={props.filters}
              getProductState={props.getProductState}
              cartItems={props.cartItems}
              addProduct={(product) => props.addProduct(product)}
              setProductPageId={props.setProductPageId}
              submitSearchForm={(v) => props.submitSearchForm(v)}
            ></ProductsList>
          </>
        )} */}

        </div>
      </div>
    </section>
  );
}

export default Catalog;