import React, { useEffect } from "react";
import { fetchAll } from "./fetch";
import { Review } from "./interfaces";
import { ReviewsList } from "./components/reviewsList";
import "./App.css";
import { Header } from "./components/header";

const App = () => {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [isListView, setIsListView] = React.useState();

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
      <ReviewsList reviews={reviews} />
    </div>
  );
};

export default App;
