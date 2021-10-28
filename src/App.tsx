import React, { useEffect } from "react";
import { fetchAll } from "./fetch";
import { Review } from "./interfaces";
import { ReviewsList } from "./components/reviewsList";
import "./App.css";

const App = () => {
  const [reviews, setReviews] = React.useState<Review[]>([]);

  useEffect(() => {
    async function getReviews() {
      let response = await fetchAll();
      setReviews(response);
    }
    getReviews();
  }, []);

  return (
    <div className="App">
      <ReviewsList reviews={reviews} />
      ))
    </div>
  );
};

export default App;
