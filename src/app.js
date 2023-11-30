import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal'
import CartInfo from './components/cartInfo'

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const list = store.getState().list || [];
  
  const cart = store.getState().cart;

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
      {isModalOpen && <Modal cart={cart} onCloseModal={closeModal} onDeleteItem={callbacks.onDeleteItem}/>}
      <Head title='Магазин'/>
      <div>
      <CartInfo cart={cart}/>
      <Controls onAdd={openModal}/>
      </div>
      <List list={list}
            onSelectItem={callbacks.onSelectItem}
            onAddItem={callbacks.onAddItem}/>
            
    </PageLayout>
  );
}

export default App;
