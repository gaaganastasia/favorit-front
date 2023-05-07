import React from "react";
import "./ProductPage.css";
import SearchForm from "../SearchForm/SearchForm";
import { useParams } from "react-router-dom";
import ImageSwiper from "../ImageSwiper/ImageSwiper";


function ProductPage(props) {

  let { _id } = useParams();

  React.useEffect(() => {
    //props.getProducts()
    props.setIsHeaderVisible(true);
    props.getPhotos();
  }, []);

  // if (!props.products.find((i) => i._id === _id)) {
  //   props.history.push('/catalog');
  //   // console.log('find')
  // }

  const [product, setProduct] = React.useState(props.products.find((i) => i._id === _id))

  React.useEffect(() => {
    setProduct(props.products.find((i) => i._id === _id))
  }, [props.products]);

  const isInCart = props.cartItems && props.cartItems.some((p) => p._id === _id);

  const [isEdited, setIsEdited] = React.useState(false);

  const [formValues, setValues] = React.useState(product ? {"name": product.name, "price": product.price, "discount": product.discount, "description": `${product.description}`} : {});

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...formValues, [name]: `${value}` });
  };

  function handleIsEdited() {
    setIsEdited(!isEdited);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formValues.discount || formValues.discount.length === 0) {
      formValues.discount = 0;
    }

    if (isEdited) {
      props.onUpdate(_id, formValues);
      props.getProducts();
    }
    
    handleIsEdited();
  }

  return (
      <div className="product__container">
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
          request={props.request}
          setRequest={props.setRequest}
          setSearchedProducts={props.handleSearchedProducts} />

        {props.isAdmin &&
        <div className='product__admin-btns'>
          <button onClick={() => props.deleteProduct(product)} type="button" className="product__delete-btn">Удалить товар</button>
          <button onClick={handleSubmit} className="product__edit-btn">
            <p className="product__edit-btn-txt">{isEdited ? 'Сохранить' : 'Изменить товар'}</p>
            <div className={`product__edit-btn-icon ${isEdited ? 'product__edit-btn-icon_save' : 'product__edit-btn-icon_edit'}`}></div>
          </button>
        </div>
        }

        {isEdited ?
          <div className="edited-product">
          <img alt="Фото товара" src={product && product.mainImage} className="edited-product__img"></img>
          <form
            method="get"
            action="index.html"
            name="product"
            className='edited-product__form'
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <label className="edited-product__form-field" htmlFor="product">
              <input name="name"
                type="text"
                required
                onChange={handleChange}
                value={formValues.name}
                placeholder="Название" id="name"
                className="edited-product__form-input edited-product__form-input_name"
              ></input>
            </label>
            <div className="edited-product__form-price">
              <label className="edited-product__form-field" htmlFor="price">
                <input name="price"
                  type="text"
                  required
                  onChange={handleChange}
                  value={formValues.price}
                  placeholder="Цена" id="price"
                  className="edited-product__form-input edited-product__form-input_price"
                ></input>
              </label>
              <label className="edited-product__form-field" htmlFor="discount">
                <input name="discount"
                  type="text"
                  onChange={handleChange}
                  value={formValues.discount}
                  placeholder="Скидка в %" id="discount"
                  className="edited-product__form-input edited-product__form-input_discount"
                ></input>
              </label>
            </div>
            <label className="edited-product__form-field" htmlFor="description">
              <textarea name="description"
                type="text"
                required
                onChange={handleChange}
                value={formValues.description}
                placeholder="Описание" id="description"
                className="edited-product__form-input edited-product__form-input_description"
              ></textarea>
            </label>
          </form>
        </div>
        :
        <div className="product">
          <ImageSwiper product={product && product} photos={props.photos.filter((ph) => ph.productId === _id)} />
          <p className="product__title">{product && product.name}</p>
          <div className="product__price-block">
            <div className={`product__old-price ${product && product.discount && product.discount > 0 && 'product__old-price_visible'}`}>
              <p className="product__old-price-text">{`${product && product.price} ₽`}</p>
              <div className="product__old-price-line"></div>
            </div>
            <p className="product__price">{`${product && product.discount ? Math.round(product.price * (1 - (product.discount / 100))) : product && product.price} ₽`}</p>
          </div>
          <p className="product__description">{product && product.description.split('\n').map((str, i) => (
              <React.Fragment key={i}>
                {str}
                <br />
              </React.Fragment>
            ))}</p>
          {/* <div className="product__counter">
            <p className="product__number product__number-btn">-</p>
            <p className="product__number">1</p>
            <p className="product__number product__number-btn">+</p>
          </div> */}
          <button type="button" disabled={isInCart ? true : false} onClick={() => props.onAdd(product)} className={`product__btn ${isInCart ? "product__btn_disabled" : ""}`}>{isInCart ? "Добавлено" : "В корзину"}</button>
        </div>
        }
      </div>

  );
}

export default ProductPage;