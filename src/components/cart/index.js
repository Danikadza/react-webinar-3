import React from "react";
import PropTypes from 'prop-types';
import CartItem from "../cartItem";
import './style.css';

function Cart({cart}) {
  return (
    <div className='Cart'>
        {cart.map(item =>
        <div key={item.code} className='List-item'>
          <CartItem item={item}/>
        </div>
      )}
    </div>
  )
}

Cart.propTypes = {

};

Cart.defaultProps = {
 
}

export default React.memo(Cart);