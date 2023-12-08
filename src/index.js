import { createRoot } from 'react-dom/client';
import App from './app';
import ItemDescription from './components/item-description';
import Store from "./store";
import { StoreContext } from "./store/context";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemInfo from './app/item-info'

const store = new Store();

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/itemInfo/:itemId",
    element: <ItemInfo/>,
  }
]);

// Первый рендер приложения
root.render(
  <StoreContext.Provider value={store}>

    <RouterProvider router={router} />

  </StoreContext.Provider>
);
