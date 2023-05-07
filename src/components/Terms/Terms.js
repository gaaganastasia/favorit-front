import React from "react";
import "./Terms.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";


function Terms(props) {
  const [formValue, setValue] = React.useState(props.deliveryInfo.info);

  React.useEffect(() => {
    props.setIsHeaderVisible(true);
    props.getDeliveryInfo();
    setValue(props.deliveryInfo.info)
    props.getProducts();
    props.setIsSearching(false)
  }, []);



  const [isEdited, setIsEdited] = React.useState(false);


  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    setValue(value);
  };

  function handleIsEdited() {
    setIsEdited(!isEdited);
    setValue(props.deliveryInfo.info)
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isEdited) {
      // setTerms(formValue);
      props.onUpdate(props.deliveryInfo._id, `${formValue}`)
    }
    
    handleIsEdited();
  }

  return (
    <section className="terms">
      <SearchForm
          products={props.products}
          getProducts={props.getProducts}
          searchedProducts={props.searchedProducts}
          submitSearchForm={(v) => props.submitSearchForm(v)}
          request={props.request}
          setRequest={props.setRequest}
          setErr={props.setIsNotFoundErrVisible}
          setProducts={props.setProducts}
          cartItems={props.cartItems}
          history={props.history}
          isSearching={props.isSearching}
          setIsSearching={props.setIsSearching}
          setSearchedProducts={props.handleSearchedProducts} />

      <h2 className="terms__title">Условия оплаты и доставки товара</h2>

      {(props.isLoading || !props.deliveryInfo.info) ? (
          <Preloader />
        ) : (
          <div className="terms__info">
            {props.isAdmin && <button type="button" onClick={handleSubmit} className={`terms__btn terms__btn_${isEdited ? 'save' : 'edit'}`}></button>}
            
            <p className="terms__info-title">Стандартные условия доставки</p>
            {isEdited ?
              <form
                method="get"
                action="index.html"
                name="product"
                className='terms__form'
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off" >
                <label className="terms__form-field" htmlFor="description">
                  <textarea name="description"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formValue}
                    placeholder="Условия доставки и оплаты" id="description"
                    className="terms__form-input"
                  ></textarea>
                </label>
              </form>
            :
            props.deliveryInfo.info &&
            <p className="terms__info-text">{props.deliveryInfo.info.split('\n').map((str, i) => (
              <React.Fragment key={i}>
                {str}
                <br />
              </React.Fragment>
            ))}</p>
              // props.deliveryInfo.map((termsParagraph, i) => {
              //   return (
              //     <p className="terms__info-text" key={i}>{termsParagraph.info}</p>
              //   );
              // })
            }
            
          </div>
        )}

    </section>
  );
}

export default Terms;
