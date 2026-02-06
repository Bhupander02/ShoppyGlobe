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
    <div>
      <div>
        <div>
          <img src={item.coverImage} alt={item.title} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>
            seller: <span>{item.seller}</span>
          </p>
          <p>
            <span>{item.description}</span>
          </p>
          <p>
            <span>{item.cost}</span>
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <button onClick={() => handleAddItem(item)}>🛒 Add to Cart</button>

          <button onClick={() => handleRemoveItem(item)}>
            ➖ Remove from Cart
          </button>

          <button onClick={() => handleClearCart(item)}>🧹 Empty Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
