import { FC } from "react";
import { TReview } from "../../../types/types";
import { routes } from "../../../routes/routes";
import { Link } from "react-router-dom";
import styles from "./UserReview.module.styl";
import { RatingReview } from "../../shared/Rating/RatingReview/RatingReview";
import { Verified } from "../../shared/Verified/Verified";

interface UserReviewProps {
  review: TReview;
}

export const UserReview: FC<UserReviewProps> = ({ review }) => {
  console.log(review)
  return (
    <div className={styles.review} key={review.id}>
      <div className={styles.reviewAvatar}>
        <img
          className={styles.reviewAvatarImage}
          src={review.user.avatar}
          alt={review.user.username}
        />
      </div>
      <div className={styles.reviewInfo}>
        <h5 className={styles.reviewInfoName}>
          <Link to={`${routes.USERS}/${review.user.id}`}>
            {review.user.username}
          </Link>
          <Verified isVerified={review.user.isVerified} />
        </h5>
        <p className={styles.reviewInfoContent}>{review.content}</p>
        <RatingReview rating={review.rating} />
      </div>
    </div>
  );
};
