import StoreModule from "../module";
import Catalog from "../catalog";

class Basket extends StoreModule {

  initState() {
    return {
      list: [],
      sum: 0,
      amount: 0
    }
  }

  /**
   * Добавление товара в корзину
   * @param _id Код товара
   */
  async addToBasket(_id) {
    let sum = 0;
    let exist = false;
    const list = this.getState().list.map(item => {
      let result = item;
      if (item._id === _id) {
        exist = true;
        result = {...item, amount: item.amount + 1};
      }
      sum += result.price * result.amount;
      return result;
    });
  
    if (!exist) {
      const catalog = new Catalog();
      const chosenItem = await catalog.loadItem(_id); //загрузка товара из api, что позволит добавть товар даже после одновления страницы
  
      list.push({...chosenItem, amount: 1});
      sum += chosenItem.price;
    }
  
    this.setState({
      ...this.getState(),
      list,
      sum,
      amount: list.length
    }, 'Добавление в корзину');
  }

  /**
   * Удаление товара из корзины
   * @param _id Код товара
   */
  removeFromBasket(_id) {
    let sum = 0;
    const list = this.getState().list.filter(item => {
      if (item._id === _id) return false;
      sum += item.price * item.amount;
      return true;
    });

    this.setState({
      ...this.getState(),
      list,
      sum,
      amount: list.length
    }, 'Удаление из корзины');
  }
}

export default Basket;
