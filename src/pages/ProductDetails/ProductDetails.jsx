import { FaDollarSign } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import StarRating from "../Products/StarRating";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar/Navbar";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();

  const { name, brandName, typeOfProduct, price, description, rating, photo } =
    loadedProduct;
  const handleAddToCart = () => {
    const product = {
      name,
      brandName,
      typeOfProduct,
      price,
      description,
      rating,
      photo,
    };
    fetch("http://localhost:5000/storeProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:px-0 px-3 mt-8">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="w-full lg:h-[600px]" src={photo} alt="Shoes" />
          </figure>
          <div className="card-body space-y-2">
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
            <p>{description}</p>

            <div className="card-actions justify-between">
              <Link onClick={handleAddToCart}>
                <button className="btn bg-[#2e6ed5] text-white">
                  Add Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
