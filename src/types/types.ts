export type TGame = {
  id: string;
  title: string;
  description: string;
  price: number;
  genres: string[];
  image: string;
  isAdminLiked: boolean;
  platforms: string[];
  reviews: TReview[];
};

export type TUser = {
  id: string;
  username: string;
  isVerified: boolean;
  reviews: TReview[];
  avatar: string;
};

export type TReview = {
  id: string;
  content: string;
  rating: number;
  game: TGame;
  user: TUser;
};

export type TGamesQuery = {
  games: TGame[];
};

export type TGameQuery = {
  game: TGame;
};

export type TUsersQuery = {
  users: TUser[];
};

export type TUserQuery = {
  user: TUser;
};

export type TTReviewQuery = {
  review: TReview[];
};
