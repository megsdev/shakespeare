import StarRatings from "react-star-ratings";
import avatars from "../assets/avatars";
import "./reviewsList.css";
import { fetch } from "../fetch";

import { Review } from "../interfaces";
import { Dispatch } from "react";

export const ReviewsList = (props: {
  reviews: Review[];
  setSelectedReview: Dispatch<Review>;
}) => {
  const onClick = async (id: number) => {
    const selectedReview = await fetch(id);
    props.setSelectedReview(selectedReview);
  };

  return (
    <div className="reviewList">
      {props.reviews.map((review) => (
        <button
          key={review.id}
          className="reviewCard"
          onClick={() => onClick(review.id)}
        >
          <img
            src={avatars[Math.floor(Math.random() * avatars.length)]}
            alt="avatar-image"
            className="avatar"
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
        </button>
      ))}
    </div>
  );
};
