import { FC, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../../../apollo/mutation";
import { GET_GAME_BY_ID } from "../../../apollo/query";
import { GET_USER_BY_ID } from "../../../apollo/query";

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
    refetchQueries: [
      { query: GET_USER_BY_ID, variables: { id: userId } }, 
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
      setReviewContent("");
      setReviewRating(1);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Review Title"
        value={reviewContent}
        onChange={(e) => setReviewContent(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        value={reviewRating}
        onChange={(e) => setReviewRating(Number(e.target.value))}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
