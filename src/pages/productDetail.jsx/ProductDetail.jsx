import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import productsData from "../../data/products";
import ProductItem from "../../components/productItem/ProductItem";
import { useDispatch } from "react-redux";
import { addToCart, removeCart } from "../../features/productSlice";

const ProductDetail = ({ id, title, description, price }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const productId = parseInt(pathname.split("/")?.[2]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="">
      {productsData.map(
        (item, index) =>
          item.id === productId && (
            <ProductItem
              price={item.price}
              id={index}
              description={item.discription}
              title={item.title}
              key={index}
              handleAddToCart={() => handleAddToCart(item)}
              removeCart={() => handleRemoveCart(item)}
            />
          )
      )}
    </div>
  );
};

export default ProductDetail;
