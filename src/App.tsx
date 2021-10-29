import React, { useEffect } from "react";
import { fetchAll } from "./fetch";
import { Review } from "./interfaces";
import { Header } from "./components/header";
import { ReviewsList } from "./components/reviewsList";
import { FullReview } from "./components/fullReview";
import "./App.css";

const App = () => {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [selectedReview, setSelectedReview] = React.useState(null);

  useEffect(() => {
    async function getReviews() {
      let response = await fetchAll();
      setReviews(response);
    }
    getReviews();
  }, []);

  return (
    <div className="App">
      <Header />
      {selectedReview === null ? (
        <ReviewsList reviews={reviews} setSelectedReview={setSelectedReview} />
      ) : (
        <FullReview
          review={selectedReview}
          setSelectedReview={setSelectedReview}
        />
      )}
    </div>
  );
};

export default App;
