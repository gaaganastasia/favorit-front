import React from "react";
import "./Cart.css";
import CartItems from "../CartItems/CartItems";
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';


function Cart(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    props.getProducts();
    props.setIsHeaderVisible(false);
    props.sendOrderStatus(null);
  }, []);

  const numberRef = React.useRef('');
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(true);

  function goBack() {
    navigate(-1);
  }

  function handleChange(e) {
    setIsBtnDisabled(!(e.target.value && e.target.value.match(/\d/g).length === 11));
  }


  function handleSubmit(e) {
    e.preventDefault();
    let out = `Телефон покупателя: ${numberRef.current.value}\n\nСостав заказа:\n\n`;

    props.cartItems.map((i) => {
      out += `Наименование: ${i.name}\n`;
      out += `Цена: ${i.price} ₽\n`;
      if (i.discount && i.discount !== 0) {
        out += `Цена с учетом скидки ${i.discount}%: ${Math.round(i.price * (1 - (i.discount / 100)))} ₽\n`;
      }
      out += `Количество: ${i.quantity}\n\n`;

    })

    out += `Стоимость заказа: ${props.cost}`

    props.sendOrder(out);
    // props.navigate('/confirmation');
    // props.setCartItems([]);
    // props.setCost(0);
  }
  

  return (
    <div className="cart">
      <div className={`cart__header ${props.cartItems.length > 0 ? "cart__header_underlined" : ""}`}>
        <p className={`cart__title ${props.cartItems.length > 0 ? "" : "cart__title_hidden"}`}>Ваш заказ</p>
        <div className="cart__close-icon" onClick={goBack}></div>
      </div>
      <p className={`cart__message ${props.cartItems.length > 0 ? "cart__message_hidden" : ""}`}>В корзине ничего нет</p>
      <CartItems 
        cartItems={props.cartItems}
        increaseProductQuantity={(id) => props.increaseProductQuantity(id)}
        reduceProductQuantity={(id) => props.reduceProductQuantity(id)}
        getProductQuantity={(id) => props.getProductQuantity(id)}
        removeProduct={(product) => props.removeProduct(product)}
      />
      <p className={`cart__sum ${props.cartItems.length > 0 ? "" : "cart__sum_hidden"}`}>Итого: <span>{`${props.cost} ₽`}</span></p>
      <form
        method="get"
        action="index.html"
        name="phone"
        className={`cart__form ${props.cartItems.length > 0 ? "" : "cart__form_hidden"}`}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        onChange={handleChange}
      >
        <label className="cart__form-field" htmlFor="phone">
          <InputMask name="product"
            type="phone"
            ref={numberRef}
            placeholder="Телефон" id="phone"
            className="cart__form-input cart__form-input_phone"
            required mask="+7 999 999-99-99" maskChar=" " />
          
          <span className="cart__form-message">Для оформления заказа введите номер телефона</span>
        </label>
        <button type="submit" disabled={props.isLoading ? false : isBtnDisabled} className={`cart__form-submit ${isBtnDisabled ? 'cart__form-submit_disabled' : ''}`}>Оформить заказ</button>
      </form>
    </div>
  );
}

export default Cart;
