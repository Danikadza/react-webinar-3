import React, { useCallback, useState } from 'react';
import Cart from '../cart'
import './style.css';
import Head from '../head'
import PropTypes from 'prop-types';

function Modal({ onCloseModal, cart, onDeleteItem, totalCartPrice }) {

  return (
    <div className='modal'>
      <div className='modal-window'>
        <div className='modal-header'>
          <h1>Корзина</h1>
          <button className='modal-headerButton' onClick={onCloseModal}>Закрыть</button>
        </div>
        <Cart cart={cart} onDeleteItem={onDeleteItem} totalCartPrice={totalCartPrice} />
        <div className='modal-sum'>
          <div>Итого</div>
          <div>{totalCartPrice} ₽</div>
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
