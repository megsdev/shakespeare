import StarRatings from "react-star-ratings";

import { Review } from "../interfaces";

export const ReviewsList = (props: { reviews: Review[] }) => {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id} className="reviewList">
          <StarRatings rating={review.rating} />
          <p>name: {review.author}</p>
          <p>body: {review.body}</p>
          <p>date: {review.publishDate.toDateString()}</p>
        </div>
      ))}
    </div>
  );
};
