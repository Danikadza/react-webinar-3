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
        existingCartItem.totalPrice = existingCartItem.count * existingCartItem.price; // Вычисление общей стоимости
      } else {
                // Первое добавление в корзину
        updatedCart.push({ ...selectedItem, count: 1, totalPrice: selectedItem.price }); 
      }
  
      const totalCartPrice = updatedCart.reduce((total, item) => total + (item.totalPrice || 0), 0); // Считаем общую стоимость корзины
      this.setState({
        ...this.state,
        cart: updatedCart,
        totalCartPrice: totalCartPrice  // Обновляем общую стоимость корзины в state
      });
    }
  }

  /**
   * Удаление элемента из корзины
   * @param code
   */
  deleteItem(code) {
    const updatedCart = this.state.cart.filter(item => item.code !== code);
    const totalCartPrice = updatedCart.reduce((total, item) => total + item.totalPrice || 0, 0); // Обновление общей стоимости
    this.setState({
      ...this.state,
      cart: updatedCart,
      totalCartPrice: totalCartPrice // Обновляем общую стоимость в state
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
