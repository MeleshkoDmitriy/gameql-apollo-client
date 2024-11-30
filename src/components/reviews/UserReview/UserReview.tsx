import { FC } from "react";
import { TReview } from "../../../types/types";
import { routes } from "../../../routes/routes";
import { Link } from "react-router-dom";
import styles from "./UserReview.module.styl";
import { MdOutlineVerified } from "react-icons/md";

interface UserReviewProps {
  review: TReview;
}

export const UserReview: FC<UserReviewProps> = ({ review }) => {
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
          <span>{review.user.isVerified ? <MdOutlineVerified /> : null}</span>
          <span>{review.user.isVerified}</span>

        </h5>
        <p className={styles.reviewInfoContent}>{review.content}</p>
        <p className={styles.reviewInfoRating}>{review.rating}</p>
      </div>
    </div>
  );
};
