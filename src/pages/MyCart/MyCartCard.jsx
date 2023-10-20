import { Link } from "react-router-dom";
import StarRating from "../Products/StarRating";
import { FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCartCard = ({ product, cartProduct, setCartProduct }) => {
  const { _id, name, brandName, typeOfProduct, price, rating, photo } = product;

  const handleDeleteProdcut = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/storeProducts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cartProduct.filter((pd) => pd._id !== _id);
              setCartProduct(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl lg:w-3/4">
      <figure>
        <img className="h-[300px] w-[400px] p-2" src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="text-lg font-medium">{name}</h2>
        <h2 className=" text-lg font-medium text-[#2e6ed5]">{brandName}</h2>
        <p className="text-lg font-medium">{typeOfProduct}</p>
        <p className="flex items-center text-[#2e6ed5] text-lg font-medium">
          <FaDollarSign></FaDollarSign>
          {price}
        </p>
        <p>
          <StarRating rating={rating} color="gold"></StarRating>
        </p>
        <div className="card-actions">
          <Link onClick={() => handleDeleteProdcut(_id)}>
            <button className="btn bg-[#2e6ed5] text-white">Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
