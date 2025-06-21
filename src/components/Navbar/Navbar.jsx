import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartCount = useSelector((state) => state.product?.data.length);
  return (
    <nav className="bg-amber-500 p-5">
      <ul className="flex justify-end px-3">
        <li className="px-3 text-xl hover:text-gray-700">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 text-xl hover:text-gray-700">
          <Link to="/cart">
            cart<sup>{cartCount}</sup>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
