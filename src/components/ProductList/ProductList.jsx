import { useDispatch, useSelector } from "react-redux";
import productsData from "../../data/products";
import ProductItem from "../productItem/ProductItem";
import { addToCart, removeCart } from "../../features/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="bg-gray-600 min-h-screen py-8">
      <h2 className="text-center text-4xl font-bold text-amber-300 mb-10">
        Products
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.discription}
              handleAddToCart={() => handleAddToCart(item)}
              removeCart={() => handleRemoveCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
