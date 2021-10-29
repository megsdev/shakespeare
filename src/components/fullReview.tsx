import { Review } from "../interfaces";
import StarRatings from "react-star-ratings";
import avatars from "../assets/avatars";
import { Dispatch } from "react";
import "./fullReview.css";

export const FullReview = (props: {
  review: Review;
  setSelectedReview: Dispatch<Review>;
}) => {
  return (
    <div className="reviewContainer">
      <button
        className="closeButton"
        onClick={() => props.setSelectedReview(null)}
      >
        X
      </button>
      <div className="reviewContent">
        <img
          src={avatars[Math.floor(Math.random() * avatars.length)]}
          alt="avatar-image"
          className="avatar"
        />
        <div className="rating">
          <p>{props.review.author}</p>
          <StarRatings
            rating={props.review.rating}
            starDimension="15px"
            starSpacing="1px"
            starRatedColor="#FDCC0D"
          />
          <p>{props.review.publishDate.toLocaleDateString()}</p>
          <p>{props.review.body}</p>
        </div>
      </div>
    </div>
  );
};
