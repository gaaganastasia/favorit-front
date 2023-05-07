import React from "react";
import "./CartItems.css";
import CartItem from "../CartItem/CartItem";

function CartItems(props) {

  return (
    <div className="cart__items">
      {props.cartItems.length !== 0 &&
          props.cartItems.map((product, i) => {
            return (
              <CartItem
                product={product}
                key={i}
                increaseProductQuantity={() => props.increaseProductQuantity(product._id)}
                reduceProductQuantity={() => props.reduceProductQuantity(product._id)}
                getProductQuantity={() => props.getProductQuantity(product._id)}
                onRemove={() => props.removeProduct(product)}
                cartItems={props.cartItems}
              />
            );
          })}
    </div>
  );
}

export default CartItems;
