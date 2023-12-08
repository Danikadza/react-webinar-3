import {codeGenerator} from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
  }

  initState() {
    return {
      list: []
    }
  }

  async load(page) {
    const limit = 10;
    const skip = (page - 1) * limit;
    const response = await fetch(`/api/v1/articles?limit=${limit}&skip=${skip}`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.result.items
    }, 'Загружены товары из АПИ');
  }

  async loadItem(itemId) {
    const response = await fetch(`/api/v1/articles/${itemId}?fields=*,madeIn(title,code),category(title)`);
    const json = await response.json();
    return json.result;
  }

}


export default Catalog;
