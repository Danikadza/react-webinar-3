import React, { useCallback, useState } from 'react';
import Cart from '../cart'
import './style.css';
import Head from '../head'

function Modal({onCloseModal, cart}) {
  return (
    <div className='Modal'>
      <div className='Modal-window'>
        <div className='Modal-header'>
          <Head title="Корзина"/>
          <button className='Modal-headerButton' onClick={onCloseModal}>Закрыть</button>
        </div>
        <Cart cart={cart}/>
      </div>
      <div className='overlay'></div>
    </div>
  );
}

export default React.memo(Modal);
