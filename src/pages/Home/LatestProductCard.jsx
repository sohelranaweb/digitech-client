import PropTypes from "prop-types";
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

LatestProductCard.propTypes = {
  product: PropTypes.object,
};
export default LatestProductCard;
