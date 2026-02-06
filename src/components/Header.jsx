import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>View Cart</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <li className="cart-badge">🛒 {cartItems.length} items</li>
      </ul>
    </div>
  );
}

export default Header;
