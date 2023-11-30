import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';

function CartItem(props) {


  const callbacks = {
    onDelete: () => {
      props.onDeleteItem(props.item.code);
    }
  }

  return (
    <div className={'Item'}
         >
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
      {props.item.title}
      </div>
      <div className='Item-info'>
      <div className='Item-price'>{props.item.price + '₽'}</div>
      <div className='Item-count'>{props.item.count + 'шт'}</div>
      </div>
      <div className='Item-actions'>
        <button onClick={callbacks.onDelete}>
          Удалить
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  onDeleteItem: PropTypes.func,
};

CartItem.defaultProps = {
  onDeleteItem: () => {
  },
}

export default React.memo(CartItem);