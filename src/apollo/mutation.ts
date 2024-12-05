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

export const LIKE_GAME = gql`
  mutation LikeGameByAdmin($id: ID!) {
    likeGameByAdmin(id: $id) {
      id
      isAdminLiked
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id) {
      id
    }
  }
`;