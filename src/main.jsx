import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

/* ===== Lazy-loaded components ===== */
const App = lazy(() => import("./App.jsx"));
const Error = lazy(() => import("./components/Error.jsx"));
const ItemList = lazy(() => import("./components/ProductList"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));
const CartItem = lazy(() => import("./components/CartItem.jsx"));
const Contact = lazy(() => import("./components/Contact"));

/* ===== Simple Loader ===== */
const Loader = () => <h2 style={{ textAlign: "center" }}>Loading...</h2>;

const appBrowser = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loader />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <ItemList />
          </Suspense>
        ),
      },
      {
        path: "item/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loader />}>
            <CartItem />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appBrowser} />
  </StrictMode>
);
