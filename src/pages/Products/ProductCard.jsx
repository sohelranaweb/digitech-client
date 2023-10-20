import { FaDollarSign } from "react-icons/fa";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    brandName,
    typeOfProduct,
    price,
    description,
    rating,
    photo,
  } = product;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[400px]" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-xl font-semibold">{name}</h2>
            <h2 className="card-title text-xl font-semibold ">
              <span className="text-[#2e6ed5]">{brandName}</span>
            </h2>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">{typeOfProduct}</p>
            <p className="flex items-center text-[#2e6ed5] text-lg font-medium">
              <FaDollarSign></FaDollarSign>
              {price}
            </p>
            <p>
              <StarRating rating={rating} color="gold"></StarRating>
            </p>
          </div>

          <div className="card-actions justify-between">
            <Link to={`/productDetails/${_id}`}>
              <button className="btn bg-[#2e6ed5] text-white">
                Details Product
              </button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn bg-[#2e6ed5] text-white">
                Update Prodcut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

//
//
//
//
