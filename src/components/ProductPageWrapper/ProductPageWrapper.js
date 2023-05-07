import React from "react";
import { useParams } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductPage from '../ProductPage/ProductPage';

function ProductPageWrapper(props) {
  React.useEffect(() => {
    props.getProducts()
  }, []);

  let { _id } = useParams();

  function checkIfIdIsValid() {
    return props.products.find((i) => i._id === _id);
  }

  const isIdValid = checkIfIdIsValid();
  if (!isIdValid) {
    return <PageNotFound history={props.history} setIsHeaderVisible={props.setIsHeaderVisible} />;
  }
  return <ProductPage 
    getProducts={props.getProducts}
    getPhotos={props.getPhotos}
    tokenCheck={props.tokenCheck}
    photos={props.photos}
    products={props.products}
    cartItems={props.cartItems}
    history={props.history}
    onAdd={(product) => props.onAdd(product)}
    submitSearchForm={(v) => props.submitSearchForm(v)}
    isAdmin={props.isAdmin}
    deleteProduct={(product) => props.deleteProduct(product)}
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

export default ProductPageWrapper;