import { TReview } from "../types/types";


export function calcAverageRating(reviews: TReview[]) {
  const length = reviews.length;
  return (reviews.reduce((acc, review) => {
    return acc + review.rating
  }, 0) / length).toFixed(1);
}