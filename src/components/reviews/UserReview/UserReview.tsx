import { FC } from "react";
import { TReview } from "../../../types/types";
import { routes } from "../../../routes/routes";
import { Link } from "react-router-dom";
import styles from "./UserReview.module.styl";
import { RatingReview } from "../../shared/Rating/RatingReview/RatingReview";
import { Verified } from "../../shared/Verified/Verified";
import { FaTrash } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../../../apollo/mutation";

interface UserReviewProps {
  review: TReview;
}

export const UserReview: FC<UserReviewProps> = ({ review }) => {

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    update(cache: any) {
      cache.evict({ id: cache.identify(review) });
    },
    onError(error: any) {
      console.error("Error deleting review:", error.message);
      alert("Unable to delete review. Please try again later.");
    },
  });

  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      deleteReview({ variables: { id: review.id } });
    }
  };

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
      <div className={styles.reviewDelete} onClick={handleClick}>
        <FaTrash className={styles.reviewDeleteIcon} />
      </div>
    </div>
  );
};
