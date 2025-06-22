import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";
import { removeCart } from "../../features/productSlice";
import { useMemo, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [quantities, setQuantities] = useState({});

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
    setQuantities((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const totlePrice = useMemo(() => {
    return products?.data?.reduce(
      (sum, item) => sum + (item?.price || 0) * (quantities[item.id] || 1),
      0
    );
  }, [products?.data, quantities]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen py-10">
      <h2 className="text-center text-4xl font-bold text-amber-300 mb-10 drop-shadow-lg">
        Your Cart
      </h2>
      <div className="container mx-auto px-4">
        {products?.data?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
              {products?.data?.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center bg-gray-900 rounded-2xl shadow-xl p-6 transition hover:scale-[1.02] hover:shadow-2xl"
                >
                  <ProductItem
                    id={item.id}
                    description={item.description}
                    price={item.price}
                    title={item.title}
                    removeCart={() => handleRemoveCart(item)}
                  />
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-4 py-2 rounded-lg text-xl transition"
                      onClick={() => handleDecrement(item.id)}
                      disabled={(quantities[item.id] || 1) <= 1}
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-amber-300 w-10 text-center">
                      {quantities[item.id] || 1}
                    </span>
                    <button
                      className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-4 py-2 rounded-lg text-xl transition"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-4 text-lg text-green-400 font-semibold">
                    Subtotal: ₹
                    {(item.price * (quantities[item.id] || 1)).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <div className="bg-gray-800 text-amber-200 px-10 py-6 rounded-2xl text-3xl font-bold shadow-2xl">
                Total Amount:{" "}
                <span className="text-green-400">₹{totlePrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="text-2xl text-gray-300 mb-4">
              Your cart is empty.
            </div>
            <Link
              className="text-amber-400 hover:text-amber-200 underline font-medium transition"
              to={"/"}
            >
              Add product to cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
