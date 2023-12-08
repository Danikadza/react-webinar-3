import {useCallback, useContext, useEffect, useState} from 'react';
import Main from "./main";
import Basket from "./basket";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import { Outlet, Link } from "react-router-dom";


/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Main/>
      {activeModal === 'basket' && <Basket/>}
      <Outlet/>
    </>
  );
}

export default App;