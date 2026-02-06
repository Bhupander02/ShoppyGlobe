import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItems } from "../utils/cartSlice";
import { getItem } from "./../utils/itemStorage";
const Items = getItem();

function ProductDetails() {
  const { id } = useParams();
  const item = Items.find((item) => item.id === Number(id));

  const dispatch = useDispatch();

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  function handleRemoveItem(item) {
    dispatch(removeItem(item.id));
  }

  function handleClearCart(item) {
    dispatch(clearItems());
  }
  return (
    <div className="container product-details">
      <img src={item.coverImage} alt={item.title} loading="lazy"/>

      <div className="details-info">
        <h1>{item.title}</h1>
        <p>
          <strong>Seller:</strong> {item.seller}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {item.rating}
        </p>
        <p>{item.description}</p>
        <p className="product-price">${item.cost}</p>

        <div className="details-actions">
          <button onClick={() => handleAddItem(item)}>🛒 Add to Cart</button>
          <button className="secondary" onClick={() => handleRemoveItem(item)}>
            ➖ Remove from Cart
          </button>
          <button className="secondary" onClick={handleClearCart}>
            🧹 Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
