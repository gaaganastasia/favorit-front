import React from "react";
import "./News.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsList from "../NewsList/NewsList";
import { Link } from 'react-router-dom'; 
import Preloader from "../Preloader/Preloader";

function News(props) {
  React.useEffect(() => {
    props.setIsHeaderVisible(true);
    props.getNews()
    props.getProducts() 
  }, []);



  return (
    <section className="news">
      <div className="news__container">
      <SearchForm
          products={props.products}
          getProducts={props.getProducts}
          searchedProducts={props.searchedProducts}
          request={props.request}
          setRequest={props.setRequest}
          submitSearchForm={(v) => props.submitSearchForm(v)}
          setErr={props.setIsNotFoundErrVisible}
          setProducts={props.setProducts}
          cartItems={props.cartItems}
          history={props.history}
          isSearching={props.isSearching}
          setIsSearching={props.setIsSearching}
          setSearchedProducts={props.handleSearchedProducts} />

      <h2 className="news__title">Новости</h2>

        <div className="news__link-container">
          <Link to='/add-news' className={`news__add-news-link ${props.isAdmin ? 'news__add-news-link_visible' : ''}`}>Добавить событие</Link>
          {/* {!(props.news.length >0) && <p className="news__no-news-message">Новости не найдены</p>} */}

          {(props.isLoading || props.news.length === 0) ? (
          <Preloader />
        ) : (
          <>
            <NewsList 
              products={props.searchedProducts}
              news={props.news}
              getProducts={props.getProducts}
              filters={props.filters}
              getProductState={props.getProductState}
              cartItems={props.cartItems}
              addProduct={(product) => props.addProduct(product)}
              setProductPageId={props.setProductPageId}
              submitSearchForm={(v) => props.submitSearchForm(v)}
            />
          </>
        )}

        </div>
      </div>
    </section>
  );
}

export default News;