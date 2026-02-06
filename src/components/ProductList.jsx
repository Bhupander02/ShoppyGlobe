import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { getItem } from "./../utils/itemStorage";
const Items = getItem();

export default function ItemList() {
  return (
    <div className="container">
      <div className="product-grid">
        {Items.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <ProductItem itemDetails={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
