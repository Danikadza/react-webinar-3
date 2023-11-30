import {generateCode} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление элемента в корзину
   * @param code
   */
  addItem(code) {
    const selectedItem = this.state.list.find(item => item.code === code);
  
    if (selectedItem) {
      const updatedCart = [...this.state.cart];
      const existingCartItem = updatedCart.find(item => item.code === code);
  
      if (existingCartItem) {
        existingCartItem.count += 1; 
      } else {
        updatedCart.push({ ...selectedItem, count: 1 }); 
      }
  
      this.setState({
        ...this.state,
        cart: updatedCart
      });
    }
  }

  /**
   * Удаление элемента из корзины
   * @param code
   */
  deleteItem(code) {
    const updatedCart = this.state.cart.filter(item => item.code !== code);
    this.setState({
      ...this.state,
      cart: updatedCart
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
   
  }
}

export default Store;
