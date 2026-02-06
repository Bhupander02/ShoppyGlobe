import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import ItemList from './components/ProductList';
import ProductDetails from "./components/ProductDetails.jsx";
import CartItem from "./components/CartItem.jsx";


const appBrowser = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ItemList />,
      },
      {
        path: "item/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <CartItem />,
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appBrowser} />
  </StrictMode>,
);
