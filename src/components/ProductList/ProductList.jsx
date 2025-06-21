import { useDispatch, useSelector } from "react-redux";
import productsData from "../../data/products";
import ProductItem from "../productItem/ProductItem";
import { addToCart, removeCart } from "../../features/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="">
      <h2 className="text-center text-3xl p-5">Products</h2>
      <div className="flex flex-wrap ">
        {productsData.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.discription}
            handleAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
