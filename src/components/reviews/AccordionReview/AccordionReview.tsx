import { FC } from "react";
import { TReview } from "../../../types/types";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

interface AccordionReviewProps {
  reviews: TReview[];
}

export const AccordionReview: FC<AccordionReviewProps> = ({ reviews }) => {
  return (
    <div>
      {reviews
      .slice()
      .reverse()
      .map((review) => (
        <Link to={`${routes.GAMES}/${review.game.id}`} key={review.id}>
          <strong>{review.game.title}</strong>
          <p>{review.content}</p>
          <p>Rating: {review.rating}</p>
        </Link>
      ))}
    </div>
  );
};

// fieldset