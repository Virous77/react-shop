import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "../Styles/SingleProduct.css";

const RatingStar = ({ stars, reviews }) => {
  const normalStars = Array.from({ length: 5 }, (_, idx) => {
    const startNumber = idx + 0.5;

    return (
      <span key={idx}>
        {stars >= idx + 1 ? (
          <BsStarFill className="starIcon" />
        ) : stars >= startNumber ? (
          <BsStarHalf className="starIcon" />
        ) : (
          <BsStar className="starIcon" />
        )}
      </span>
    );
  });

  return (
    <main className="star-bar">
      <div className="stars">{normalStars}</div>
      <div className="reviews">({reviews} customer reviews)</div>
    </main>
  );
};

export default RatingStar;
