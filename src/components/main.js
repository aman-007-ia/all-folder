import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main component from saga", data);
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" width="300px" />
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Brand : {item.brand}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
