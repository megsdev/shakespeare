import StarRatings from "react-star-ratings";
import "./reviewsList.css";
import hamlet from "../assets/hamlet.png";
import juliet from "../assets/juliet.png";
import ladymacbeth from "../assets/ladymacbeth.png";
import romeo from "../assets/romeo.png";
import witch from "../assets/witch.png";
import { Review } from "../interfaces";

const avatars = [hamlet, juliet, ladymacbeth, romeo, witch];

export const ReviewsList = (props: { reviews: Review[] }) => {
  return (
    <div className="reviewList">
      {props.reviews.map((review) => (
        <div key={review.id} className="reviewCard">
          <img
            src={avatars[Math.floor(Math.random() * avatars.length)]}
            alt="avatar-image"
          />
          <div className="rating">
            <p>{review.author}</p>
            <StarRatings
              rating={review.rating}
              starDimension="15px"
              starSpacing="1px"
              starRatedColor="#FDCC0D"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
