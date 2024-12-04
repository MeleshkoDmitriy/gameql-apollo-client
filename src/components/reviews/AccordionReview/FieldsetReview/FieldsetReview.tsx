import { Link } from "react-router-dom";
import { routes } from "../../../../routes/routes";
import { FC } from "react";
import { TReview } from "../../../../types/types";
import { RatingReview } from "../../../shared/Rating/RatingReview/RatingReview";
import styles from "./FieldsetReview.module.styl";

interface FieldsetReviewProps {
  review: TReview;
}

export const FieldsetReview: FC<FieldsetReviewProps> = ({ review }) => {
  return (
    <Link
      to={`${routes.GAMES}/${review.game.id}`}
      className={styles.wrapper}
    >
      <fieldset className={styles.wrapperFieldset}>
        <legend className={styles.wrapperFieldsetLegend}>
          {review.game.title}
        </legend>
        <p className={styles.wrapperFieldsetContent}>{review.content}</p>
        <RatingReview rating={review.rating} />
      </fieldset>
    </Link>
  );
};
