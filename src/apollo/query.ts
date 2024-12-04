import { gql } from "@apollo/client";

export const GET_ALL_GAMES = gql`
  query Games {
    games {
      id
      title
      image
      price
      genres
    }
  }
`;

export const GET_GAME_BY_ID = gql`
  query Game($id: ID!) {
    game(id: $id) {
      id
      title
      description
      price
      genres
      image
      isAdminLiked
      platforms
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
  query Users {
    users {
      id
      username
      avatar
      isVerified
      reviews {
        content
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query User($id: ID!) {
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
  query Reviews {
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
        isAdminLiked
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
