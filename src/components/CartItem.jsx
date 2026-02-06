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
    <div>
      <h1>Your Cart</h1>

      <div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "16px",
              alignItems: "center",
            }}
          >
            <img
              src={item.coverImage}
              alt={item.title}
              width="80"
              height="80"
            />

            <div>
              <h3>{item.title}</h3>
              <p>${item.cost}</p>

              <button onClick={() => dispatch(removeItem(item.id))}>
                ➖ Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => dispatch(clearItems())}>🧹 Clear Cart</button>
    </div>
  );
}

export default CartItem;
