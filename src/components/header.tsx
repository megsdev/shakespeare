import header from "../assets/header.png";
import "./header.css";

export const Header = () => {
  return (
    <div>
      <img src={header} alt="header" className="header" />
      <h2>Shakespeare Reviews</h2>
    </div>
  );
};
