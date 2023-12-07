import {memo, useCallback} from 'react';
import BasketTool from "../../components/basket-tool";
import Head from "../../components/head";
import useSelector from "../../store/use-selector";
import useStore from "../../store/use-store";
import ItemDescription from "../../components/item-description"
import { Link } from "react-router-dom";


function ItemInfo() {

    const store = useStore();

    const callbacks = {
        // Добавление в корзину
        addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
        // Открытие модалки корзины
        openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
      }

      const select = useSelector(state => ({
        list: state.catalog.list,
        amount: state.basket.amount,
        sum: state.basket.sum
      }));
    

  return (
    <>
    <Head title='Название товара'/>
    <Link to={`/`}>Главная</Link>
    <ItemDescription/>
    <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
    </>
  );
}

export default memo(ItemInfo);
