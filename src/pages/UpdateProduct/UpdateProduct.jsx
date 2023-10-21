import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar/Navbar";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id,
    name,
    brandName,
    typeOfProduct,
    price,

    rating,
    photo,
  } = product;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const typeOfProduct = form.typeOfProduct.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const updatedProduct = {
      name,
      brandName,
      typeOfProduct,
      price,
      rating,
      photo,
    };
    fetch(
      `https://digitech-server-83i85x7t0-sohel-rana.vercel.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated product successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="lg:px-0 px-3">
      <Navbar></Navbar>
      <div className="bg-[#F4F3F0] p-24 mt-8">
        <h1 className="lg:text-3xl text-xl font-bold">
          Update Product: <span className="text-[#2e6ed5]"> {name}</span>
        </h1>
        <form onSubmit={handleUpdateProduct}>
          {/* form row product name and brand name */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product name"
                  defaultValue={name}
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={brandName}
                  name="brandName"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row type of product name and price */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type of Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Type of product name"
                  defaultValue={typeOfProduct}
                  name="typeOfProduct"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  defaultValue={price}
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row and rating */}
          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  defaultValue={rating}
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row Photo Url */}
          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo URL"
                  defaultValue={photo}
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="update Product"
            className="btn btn-block text-white bg-[#2e6ed5]"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
