import React, { useCallback, useState } from 'react';
import Cart from '../cart'
import './style.css';
import Head from '../head'
import PropTypes from 'prop-types';

function Modal({onCloseModal, cart, onDeleteItem}) {

  function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  }
  const totalPrice = calculateTotalPrice(cart);
  return (
    <div className='Modal'>
      <div className='Modal-window'>
        <div className='Modal-header'>
          <Head title="Корзина"/>
          <button className='Modal-headerButton' onClick={onCloseModal}>Закрыть</button>
        </div>
        <Cart cart={cart} onDeleteItem={onDeleteItem}/>
        <div className='Modal-sum'>
          <div>Итого</div>
          <div>{totalPrice} ₽</div>
        </div>
      </div>
      <div className='overlay'></div>
    </div>
  );
}

Modal.propTypes = {
  onDeleteItem: PropTypes.func,
};

Modal.defaultProps = {
  onDeleteItem: () => {
  },
}

export default React.memo(Modal);
