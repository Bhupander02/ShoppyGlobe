import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearItems } from "../utils/cartSlice";

function CartItem() {
  const dispatch = useDispatch();

  // get cart items from redux store
  const cartItems = useSelector((store) => store.cart.items);

  if (!cartItems || cartItems.length === 0) {
    return <h2>Your cart is empty 🛒</h2>;
  }

  return (
    <div className="container cart-page">
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.coverImage} alt={item.title} loading="lazy"/>
          <div>
            <h3>{item.title}</h3>
            <p>${item.cost}</p>
            <button
              className="secondary"
              onClick={() => dispatch(removeItem(item.id))}
            >
              ➖ Remove
            </button>
          </div>
        </div>
      ))}

      <button className="secondary" onClick={() => dispatch(clearItems())}>
        🧹 Clear Cart
      </button>
    </div>
  );
}

export default CartItem;
