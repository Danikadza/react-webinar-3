import React from "react";
import PropTypes from 'prop-types';
import CartItem from "../cartItem";
import './style.css';

function Cart({cart, onDeleteItem}) {
  return (
    <div className='Cart'>
        {cart.map(item =>
        <div key={item.code} className='List-item'>
          <CartItem item={item} onDeleteItem={onDeleteItem}/>
        </div>
      )}
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