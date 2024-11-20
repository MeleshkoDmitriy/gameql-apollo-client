import { gql } from "@apollo/client";

export const ADD_REVIEW = gql`
  mutation AddReview($review: AddReviewInput!) {
    addReview(review: $review) {
      content
      rating
      game {
        id
        title
      }
      user {
        id
        username
      }
    }
  }
`;
