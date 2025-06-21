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
  return (
    <div className=" bg-amber-200 m-2 p-5 text-center  ">
      <div className=" text-xl mb-2">Title : {title}</div>
      <div className=""> Price : {price}</div>
      <div className="mb-5">Description : {description}</div>
      <div className="flex justify-center mb-5">
        {pathname !== "/cart" && (
          <button
            className="cursor-pointer border-black border-2 p-2 rounded-md "
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
        {pathname === "/cart" && (
          <button
            className="cursor-pointer border-black border-2 p-2 rounded-md"
            onClick={removeCart}
          >
            Remove
          </button>
        )}
      </div>
      <Link className="border-b border-amber-950" to={`/product/${id}`}>
        Product detail
      </Link>
    </div>
  );
};

export default ProductItem;
