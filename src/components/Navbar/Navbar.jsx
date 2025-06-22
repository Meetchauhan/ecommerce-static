import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartCount = useSelector((state) => state.product?.data.length);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-amber-400 tracking-wide hover:text-amber-300 transition"
        >
          Ecommerce
        </Link>
        <ul className="flex items-center space-x-8 px-4">
          <li>
            <Link
              to="/"
              className="text-lg text-gray-200 hover:text-amber-400 transition font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative text-lg text-gray-200 hover:text-amber-400 transition font-medium"
            >
              Cart
              <span className="absolute -top-2 -right-5 bg-amber-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
