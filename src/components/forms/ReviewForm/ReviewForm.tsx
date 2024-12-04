import { FC, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../../../apollo/mutation";
import { GET_GAME_BY_ID } from "../../../apollo/query";
import { GET_USER_BY_ID } from "../../../apollo/query";
import styles from "./ReviewForm.module.styl";
import { RatingForm } from "../../shared/Rating/RatingForm/RatingForm";

interface ReviewFormProps {
  gameId: string;
  userId: string;
}

export const ReviewForm: FC<ReviewFormProps> = ({ gameId, userId }) => {
  const [reviewContent, setReviewContent] = useState("");
  const [reviewRating, setReviewRating] = useState(1);

  const [sendReview] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      const { game } = cache.readQuery<any>({
        query: GET_GAME_BY_ID,
        variables: { id: gameId },
      });

      cache.writeQuery({
        query: GET_GAME_BY_ID,
        variables: { id: gameId },
        data: { game: { ...game, reviews: [...game.reviews, addReview] } },
      });
    },
    refetchQueries: [{ query: GET_USER_BY_ID, variables: { id: userId } }],
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendReview({
        variables: {
          review: {
            gameId: gameId,
            content: reviewContent,
            rating: reviewRating,
          },
        },
      });
      setReviewContent("");
      setReviewRating(1);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.formTextarea}
        placeholder="Review Title"
        value={reviewContent}
        onChange={(e) => setReviewContent(e.target.value)}
        required
      />
      <div className={styles.formGroup}>
        <RatingForm rating={reviewRating} onRatingChange={setReviewRating} />
        <button type="submit" className={styles.formGroupButton}>
          Submit
        </button>
      </div>
    </form>
  );
};
