const Brand = ({ brand }) => {
  const { brandName, image } = brand;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brandName}</h2>
      </div>
    </div>
  );
};

export default Brand;
