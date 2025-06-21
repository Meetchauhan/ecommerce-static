import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";
import { removeCart } from "../../features/productSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };

  console.log("products", products);

  return (
    <div className="">
      <h2 className="text-center text-3xl p-5">Cart</h2>
      {products?.data?.length > 0 ? (
        products?.data?.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            description={item.description}
            price={item.price}
            title={item.title}
            removeCart={() => handleRemoveCart(item)}
          />
        ))
      ) : (
        <div className=" text-center text-xl">
          <Link className="border-b border-b-amber-800" to={"/"}>
            Add product in cart
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
