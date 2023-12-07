import {memo} from "react";
import PropTypes from "prop-types";
import './style.css';

function ItemDescription() {
  return (
    <div className='Head'>
      <h1>Предмет</h1>
    </div>
  )
}

ItemDescription.propTypes = {
  title: PropTypes.node,
};

export default memo(ItemDescription);