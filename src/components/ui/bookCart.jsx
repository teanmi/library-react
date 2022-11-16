import React from "react";

const Bookcart = ({ book, changeQuantity, cart, removeBookFromCart }) => {

  return (
    <div className="cart__item">
      <div className="cart__book">
        <img src={book.url} alt="" className="cart__book--img" />
        <div className="cart__book--info">
          <span className="cart__book--title">{book.title}</span>
          <div className="cart__book--price">
            ${(book.salePrice || book.originalPrice).toFixed(2)}
          </div>
          <button className="cart__book--remove" onClick={() => removeBookFromCart(book)}>Remove</button>
        </div>
      </div>
      <div className="cart__quantity">
        <input
          type="number"
          min={0}
          max={99}
          value={book.quantity}
          className="cart__input"
          onChange={(event) => changeQuantity(book, event.target.value)}
        />
      </div>
      <div className="cart__total">${
        ((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)
      }</div>
    </div>
  );
};

export default Bookcart;
