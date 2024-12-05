import { gql } from "@apollo/client";

export const GET_LIKED_GAMES = gql`
  query GetLikedGames {
    likedGames {
      id
      title
      image
      isAdminLiked
    }
  }
`;

export const GET_ALL_GAMES = gql`
  query GetAllGames {
    games {
      id
      title
      image
      price
      genres
      platforms
      isAdminLiked
    }
  }
`;

export const GET_GAME_BY_ID = gql`
  query GetGameById($id: ID!) {
    game(id: $id) {
      id
      title
      description
      price
      genres
      platforms
      image
      isAdminLiked
      reviews {
        id
        content
        rating
        user {
          id
          username
          avatar
          isVerified
        }
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      username
      avatar
      isVerified
      reviews {
        id
        content
        rating
        game {
          id
          title
        }
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      id
      username
      avatar
      isVerified
      reviews {
        id
        content
        rating
        game {
          id
          title
          image
          genres
          platforms
        }
      }
    }
  }
`;

export const GET_ALL_REVIEWS = gql`
  query GetAllReviews {
    reviews {
      id
      content
      rating
      game {
        id
        title
        image
        price
        genres
        platforms
      }
      user {
        id
        username
        avatar
        isVerified
      }
    }
  }
`;