import React from "react";
import PropTypes from "prop-types";
import './style.css';

function CartHead({title, onCloseModal}) {
  return (
    <div className='carthead'>
          <h1>{title}</h1>
          <button className='carthead-headerButton' onClick={onCloseModal}>Закрыть</button>
    </div>
  )
}

CartHead.propTypes = {
  title: PropTypes.node,
};

export default React.memo(CartHead);
