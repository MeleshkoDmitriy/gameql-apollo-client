import { FC } from "react";
import styles from "./ReviewsList.module.styl";
import { UserReview } from "../../reviews/UserReview/UserReview";
import { TReview } from "../../../types/types";

interface ReviewsListProps {
  list: TReview[];
}

export const ReviewsList: FC<ReviewsListProps> = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((review, index) => (
        <UserReview review={review} key={index} />
      ))}
    </div>
  );
};
