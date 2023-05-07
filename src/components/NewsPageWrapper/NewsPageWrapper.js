import React from "react";
import { useParams } from 'react-router-dom';
import NewsPage from "../NewsPage/NewsPage";
import PageNotFound from '../PageNotFound/PageNotFound';

function NewsPageWrapper(props) {
  React.useEffect(() => {
    props.getNews()
  }, []);


  let { _id } = useParams();

  function checkIfIdIsValid() {
    return props.news.find((i) => i._id === _id);
  }


  const isIdValid = checkIfIdIsValid();
  if (!isIdValid) {
    return <PageNotFound history={props.history} setIsHeaderVisible={props.setIsHeaderVisible} />;
  }
  
  return <NewsPage
    getNews={props.getNews}
    getProducts={props.getProducts}
    products={props.products}
    tokenCheck={props.tokenCheck}
    cartItems={props.cartItems}
    news={checkIfIdIsValid()}
    history={props.history}
    submitSearchForm={(v) => props.submitSearchForm(v)}
    isAdmin={props.isAdmin}
    getNewsPhotos={props.getNewsPhotos}
    newsPhotos={props.newsPhotos}
    deleteNews={(n) => props.deleteNews(n)}
    onUpdate={props.onUpdate}
    isNotFoundErrVisible={props.isNotFoundErrVisible}
    setIsNotFoundErrVisible={props.setIsNotFoundErrVisible}
    setIsSearching={props.setIsSearching}
    isSearching={props.isSearching}
    setProducts={props.setProducts}
    request={props.request}
    setRequest={props.setRequest}
    setIsHeaderVisible={props.setIsHeaderVisible}
/>;
}

export default NewsPageWrapper;