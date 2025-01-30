import myPhoto from "../../asset/myPhoto.jpeg";
import "./ProductCart.css";
import ProductInfo from "./ProductInfo";

export const ProductCart = () => {
  return (
    <center className="productCartContainer">
      <img src={myPhoto} alt=" " />
      <ProductInfo />
    </center>
  );
};
