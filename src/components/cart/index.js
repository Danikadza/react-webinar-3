import React from "react";
import PropTypes from 'prop-types';
import CartItem from "../cartItem";
import './style.css';
import { formatPrice } from '../../utils';
import CartHead from '../carthead'

function Cart({ cart, onDeleteItem, totalCartPrice, title, onCloseModal }) {
  return (
    <div className='cart'>
      <CartHead title={title} onCloseModal={onCloseModal}></CartHead>
      {cart.map(item =>
        <div key={item.code} className='cart-item'>
          <CartItem item={item} onDeleteItem={onDeleteItem} />
        </div>
      )}
      <div className="cart-sum">
      <div>Итого</div>
      <div>{formatPrice(totalCartPrice)}</div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  onDeleteItem: PropTypes.func,
};

Cart.defaultProps = {
  onDeleteItem: () => {
  },
}

export default React.memo(Cart);