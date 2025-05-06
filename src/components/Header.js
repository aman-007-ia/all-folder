import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("selector", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img
          src="https://img.icons8.com/?size=100&id=G7PELQpF8j6g&format=png&color=000000"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
