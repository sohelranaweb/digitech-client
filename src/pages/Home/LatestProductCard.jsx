const LatestProductCard = ({ product }) => {
  const { img_url } = product;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-[200px] h-[200px]" src={img_url} alt="Shoes" />
      </figure>
    </div>
  );
};

export default LatestProductCard;
