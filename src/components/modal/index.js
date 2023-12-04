import React from "react";
import './style.css';
import PropTypes from 'prop-types';

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
