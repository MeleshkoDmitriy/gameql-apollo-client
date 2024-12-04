import { FC, useState } from "react";
import styles from "./RatingForm.module.styl";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

interface RatingFormProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

export const RatingForm: FC<RatingFormProps> = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const stars = Array(5).fill(0);

  return (
    <div className={styles.rating}>
      {stars.map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            onMouseEnter={() => setHoveredRating(starValue)}
            onMouseLeave={() => setHoveredRating(null)}
            onClick={() => onRatingChange(starValue)}
            className={styles.star}
          >
            {starValue <= (hoveredRating ?? rating) ? (
              <FaStar className={styles.icon} />
            ) : (
              <FaRegStar className={styles.icon} />
            )}
          </span>
        );
      })}
    </div>
  );
};
