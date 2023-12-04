import React, { useCallback, useState } from 'react';
import Cart from '../cart'
import './style.css';
import Head from '../head'
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';
import CartHead from '../carthead'


function Modal({children}) {

  return (
    <div className='modal'>
      <div className='modal-window'>
        {children}
      </div>
      <div className='overlay'></div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node
}

export default React.memo(Modal);
