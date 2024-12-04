import { FC } from "react";
import styles from "./RatingReview.module.styl"; 
import { FaStar } from "react-icons/fa"; 
import { FaRegStar } from "react-icons/fa";

interface RatingReviewProps {
  rating: number;
}

export const RatingReview: FC<RatingReviewProps> = ({ rating }) => {
  const stars = Array(5).fill(0);

  return (
    <div className={styles.rating}>
      {stars.map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={index}>
            {starValue <= rating ? (
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
