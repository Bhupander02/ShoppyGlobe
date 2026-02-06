import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-full bg-gray-900 shadow-lg sticky top-0 z-50">
      <ul className="flex items-center justify-center gap-10 px-16 py-8 text-xl font-semibold text-gray-200">
        <Link to="/">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Home
          </li>
        </Link>

        <Link to="/cart">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            View Cart
          </li>
        </Link>

        <Link to="/contact">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Contact
          </li>
        </Link>

        <li className="text-2xl ml-4 px-4 py-1 rounded-full bg-blue-500 text-white font-light shadow-md">
          🛒 {cartItems.length} items
        </li>
      </ul>
    </div>
  );
}

export default Header;
