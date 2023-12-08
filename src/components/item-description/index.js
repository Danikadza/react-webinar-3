import {memo} from "react";
import PropTypes from "prop-types";
import './style.css';

function ItemDescription({description,country,category,year,price, onAdd, itemId}) {

  const callbacks = {
    onAdd: (e) => onAdd(itemId)
  }


  return (
    <div className='itemDescription'>
      <div className='itemDescription-discription'>{description}</div>
      <div className='itemDescription-country'>Страна производитель: <b>{country}</b></div>
      <div className='itemDescription-category'>Категория: <b>{category}</b></div>
      <div className='itemDescription-year'>Год выпуска: <b>{year}</b></div>
      <div className='itemDescription-price'>Цена: {price}</div>
      <button onClick={callbacks.onAdd}>Добавить</button>
    </div>
  )
}

ItemDescription.propTypes = {
  title: PropTypes.node,
};

export default memo(ItemDescription);