import myPhoto from "../../asset/myPhoto.jpeg";
import "./ProductCart.css";
import ProductInfo from "./ProductInfo";

export const ProductCart = () => {
  return (
    <center className="prodctCartContainer">
      <img src={myPhoto} alt=" " />
      <ProductInfo />
    </center>
  );
};
