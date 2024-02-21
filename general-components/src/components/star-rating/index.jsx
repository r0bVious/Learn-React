import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

export default function StarRating({ numStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(numStars)].map((_, index) => {
        index++;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={50}
          />
        );
      })}
    </div>
  );
}
