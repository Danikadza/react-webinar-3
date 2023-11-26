import React from 'react';
import {createElement} from './utils.js';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  
//Функция для плюрализации
  function pluralize(number) {
    if (number === 1) {
      return number + " раз";
    } else if (number % 10 === 1 && number % 100 !== 11) {
      return number + " раз";
    } else if (
      number % 10 >= 2 &&
      number % 10 <= 4 &&
      (number % 100 < 10 || number % 100 >= 20)
    ) {
      return number + " раза";
    } else {
      return number + " раз";
    }
  }

  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{
          list.map(item =>
            <div key={item.code} className='List-item'>
              <div className={'Item' + (item.selected ? ' Item_selected' : '')}
                   onClick={() => store.selectItem(item.code)}>
                <div className='Item-code'>{item.code}</div>
                {item.counter==0 && <div className='Item-title'>{item.title}</div>}
                {item.counter>0 && <div className='Item-title'>{item.title} | Выделяли {pluralize(item.counter)} </div>}
                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
