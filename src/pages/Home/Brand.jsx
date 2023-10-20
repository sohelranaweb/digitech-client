import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brandName, image } = brand;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-[200px] h-[200px] pt-2" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <Link to={`products/${brandName}`}>
          <h2 className="text-center text-2xl font-semibold text-[#2e6ed5]">
            {brandName}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Brand;
