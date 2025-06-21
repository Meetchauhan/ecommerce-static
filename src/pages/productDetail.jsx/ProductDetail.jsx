import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import productsData from "../../data/products";
import ProductItem from "../../components/productItem/ProductItem";
import { useDispatch } from "react-redux";

const ProductDetail = ({ id, title, description, price }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const productId = parseInt(pathname.split("/")?.[2]);

  useEffect(() => {});

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
            />
          )
      )}
    </div>
  );
};

export default ProductDetail;
