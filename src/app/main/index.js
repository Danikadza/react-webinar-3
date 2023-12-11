import { memo, useCallback, useEffect, useState, } from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import Pagination from "../../components/pagination";
import { Link } from "react-router-dom";
import './style.css';


function Main() {

  const store = useStore();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    store.actions.catalog.load(currentPage); //начальная страница
    store.actions.catalog.loadTotalItems();
  }, [store, currentPage]);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    totalItems:state.catalog.totalItems,
  }));

  const totalPages = Math.ceil(select.totalItems / 10);;

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <PageLayout>
      <Head title='Магазин' />
      <div className='cartAndNavigationTools'>
      <Link to={`/`}>Главная</Link>
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
      </div>
      <List
        list={select.list}
        renderItem={renders.item}
      />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </PageLayout>
  );
}

export default memo(Main);
