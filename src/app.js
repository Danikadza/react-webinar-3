import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal'
import CartInfo from './components/cartInfo'
import Cart from './components/cart'

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const list = store.getState().list || [];
  
  const cart = store.getState().cart;

  const totalCartPrice = store.getState().totalCartPrice;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback((code) => {
      store.addItem(code);
    }, [store])
  }

  return (
    <PageLayout>
      {isModalOpen && <Modal >
        <Cart cart={cart} totalCartPrice={totalCartPrice} onCloseModal={closeModal} onDeleteItem={callbacks.onDeleteItem} title='Корзина'/>
        </Modal>}
      <Head title='Магазин'/>
      <CartInfo cart={cart} onAdd={openModal} totalCartPrice={totalCartPrice}/>
      <List list={list}
            onSelectItem={callbacks.onSelectItem}
            onAddItem={callbacks.onAddItem}/>
    </PageLayout>
  );
}

export default App;
