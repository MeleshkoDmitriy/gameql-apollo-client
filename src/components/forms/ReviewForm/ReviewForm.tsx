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

  const [sendReview, { loading }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      console.log("Полученные данные от сервера:", addReview);

      const { game } = cache.readQuery<any>({
        query: GET_GAME_BY_ID,
        variables: { id: gameId },
      }) || { game: { reviews: [] } };

      cache.writeQuery({
        query: GET_GAME_BY_ID,
        variables: { id: gameId },
        data: {
          game: {
            ...game,
            reviews: [...game.reviews, addReview],
          },
        },
      });
    },
    refetchQueries: [
      { query: GET_USER_BY_ID, variables: { id: userId } },
      // { query: GET_GAME_BY_ID, variables: { id: gameId } },
    ],
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

      alert("Your review has been added successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("There was an issue submitting your review. Please try again.");
    } finally {
      setReviewContent("");
      setReviewRating(1);
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
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};
