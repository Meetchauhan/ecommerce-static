import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const ProductItem = ({
  id,
  title,
  price,
  description,
  handleAddToCart,
  removeCart,
}) => {
  const { pathname } = useLocation();
  const products = useSelector((state) => state.product);
  const isInCart = products?.data?.some((item) => item.id === id);

  return (
    <div className="bg-gray-900 shadow-lg rounded-xl m-4 p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="text-2xl font-bold text-amber-300 mb-2">{title}</div>
      <div className="text-lg text-gray-200 mb-1">
        Price: <span className="font-semibold text-green-400">${price}</span>
      </div>
      <div className="text-gray-400 mb-4 text-center">{description}</div>
      <div className="flex gap-4 mb-4">
        {!isInCart ? (
          <button
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded transition"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        ) : (
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition"
            onClick={removeCart}
          >
            Remove
          </button>
        )}
      </div>
      {pathname !== `/product/${id}` && (
        <Link
          className="text-amber-300 hover:text-amber-400 underline font-medium transition"
          to={`/product/${id}`}
        >
          View Details
        </Link>
      )}
    </div>
  );
};

export default ProductItem;
