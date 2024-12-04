import { FC } from "react";
import { TReview } from "../../../types/types";
import { FieldsetReview } from "./FieldsetReview/FieldsetReview";
import styles from "./AccordionReview.module.styl";

interface AccordionReviewProps {
  reviews: TReview[];
}

export const AccordionReview: FC<AccordionReviewProps> = ({ reviews }) => {
  return (
    <>
      <h2 className={styles.title}>
        {reviews.length > 0 ? "Reviews" : "No reviews yet"}
      </h2>
      <div className={styles.list}>
        {reviews
          .slice()
          .reverse()
          .map((review) => (
            <FieldsetReview review={review} key={review.id} />
          ))}
      </div>
    </>
  );
};
