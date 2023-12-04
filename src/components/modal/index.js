import React, { useCallback, useState } from 'react';
import Cart from '../cart'
import './style.css';
import Head from '../head'
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';


function Modal({ onCloseModal, cart, onDeleteItem, totalCartPrice, title }) {

  return (
    <div className='modal'>
      <div className='modal-window'>
        <div className='modal-header'>
          <h1>{title}</h1>
          <button className='modal-headerButton' onClick={onCloseModal}>Закрыть</button>
        </div>
        <Cart cart={cart} onDeleteItem={onDeleteItem} totalCartPrice={totalCartPrice} />
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
