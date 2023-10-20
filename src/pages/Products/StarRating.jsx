import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating, color }) => {
  const stars = [];
  const totalStars = 5;

  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Calculate if there's a half star
  let hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < totalStars; i++) {
    const starColor = i < fullStars ? color : "gray"; // Set the color based on the rating
    if (i < fullStars) {
      stars.push(<FaStar key={i} style={{ color: starColor }} />);
    } else if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt
          key={i}
          style={{ color: starColor, opacity: 0.5 }} // Add opacity to the half-star
        />
      );
      hasHalfStar = false; // So that we only have one half star
    } else {
      stars.push(<FaStar key={i} style={{ color: starColor }} />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
