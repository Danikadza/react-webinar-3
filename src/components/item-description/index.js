import {memo} from "react";
import PropTypes from "prop-types";
import './style.css';

function ItemDescription({description,country,category,year,price}) {
  return (
    <div className='itemDescription'>
      <div className='itemDescription-discription'>{description}</div>
      <div className='itemDescription-country'>Страна производитель: {country}</div>
      <div className='itemDescription-category'>Категория: {category}</div>
      <div className='itemDescription-year'>Год выпуска: {year}</div>
      <div className='itemDescription-price'>Цена: {price}</div>
      <button>Добавить</button>
    </div>
  )
}

ItemDescription.propTypes = {
  title: PropTypes.node,
};

export default memo(ItemDescription);