import React from "react";
import "./SearchForm.css";
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function SearchForm(props) {
  const navigate = useNavigate();

  //const productRef = React.useRef(props.request ? props.request : ' ');
  const [formValue, setValue] = React.useState(props.isSearching ? props.request : '');

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    setValue(value);
  };

  const isBtnDisabled = formValue && formValue > 0 ? true : false;

  function handleSubmit(e) {
    e.preventDefault();
    props.setIsSearching(true);

    if (!formValue || formValue === " ") {
    } else {
      if (props.history.location.pathname !== "/catalog") {
        navigate("/catalog");
      }

      props.setErr(false);

      let ps = props.products.filter(
        (p) =>
          p.name.toLowerCase().indexOf(formValue.toLowerCase()) !== -1 ||
          p.category.toLowerCase().indexOf(formValue.toLowerCase()) !== -1
      );

      localStorage.setItem('products', JSON.stringify(ps));
      localStorage.setItem('request', JSON.stringify(formValue));
      //console.log(typeof productRef)

      props.setProducts(ps, formValue);

      if (ps.length === 0) {
        props.setErr(true);
      }
    }
  }


  return (
    <div className="search-form">
      <form
        method="get"
        action="index.html"
        name="search"
        className="search-form__container"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <label className="search-form__field" htmlFor="product">
          <input
            name="product"
            type="text"
            placeholder="Поиск"
            onChange={handleChange}
            value={formValue}
            id="product"
            className="search-form__input search-form__input-product"
            required
          ></input>
          {/* <span
            className={`form__input-error ${
              !isValid ? `form__input-error_active` : ``
            }`}
          >
            Нужно ввести ключевое слово
          </span> */}
        </label>
        <button type="submit" className={`search-form__submit ${isBtnDisabled ? "search-form__submit_disabled" : ""}`} disabled={isBtnDisabled} ></button>
      </form>
      <Link to="/cart" className="search-form__cart">
        <div className={`search-form__cart-count ${props.cartItems && props.cartItems.length < 1 ? `search-form__cart-count_hidden` : ``}`}>
          <p className="search-form__cart-number">{props.cartItems.length}</p>
        </div>
      </Link>
    </div>
  );
}

export default SearchForm;
