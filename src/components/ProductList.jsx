import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { getItem } from "./../utils/itemStorage";
const Items = getItem();

export default function ItemList() {
  return (
    <div>
      {Items.map((data) => (
        <Link key={data.id} to={`/item/${data.id}`}>
          <ProductItem itemDetails={data} />
        </Link>
      ))}
    </div>
  );
}
