import React, { useCallback, useState } from 'react';
import './style.css';

function Modal({onCloseModal}) {
  return (
    <div className='Modal'>
      <div className='Modal-window'>
        <div>Модальное окно</div>
        <button onClick={onCloseModal}>Закрыть</button>
      </div>
      <div className='overlay'></div>
    </div>
  );
}

export default React.memo(Modal);
