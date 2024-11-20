import { useSuspenseQuery } from "@apollo/client";
import { FC } from "react";
import { TGameQuery } from "../../../types/types";
import { GET_GAME_BY_ID } from "../../../apollo/query";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { ReviewForm } from "../../forms/ReviewForm/ReviewForm";
import { constants } from "../../../utils/constants";

interface GameProfileProps {
  id: string | undefined;
}

export const GameProfile: FC<GameProfileProps> = ({ id }) => {
  const { data: dataGameById } = useSuspenseQuery<TGameQuery>(GET_GAME_BY_ID, {
    variables: { id },
  });

  const { game } = dataGameById;

  return (
    <section>
      <h1>Game Page {game.title}</h1>
      <img src={game.image} alt={game.title} />
      <p>{game.description}</p>
      {game.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
      {game.platforms.map((platform, index) => (
        <span key={index}>{platform}</span>
      ))}
      
      <ReviewForm gameId={game.id} userId={constants.adminID} />

      {game.reviews.map((review) => (
        <Link to={`${routes.USERS}/${review.user.id}`} key={review.id}>
          <img
            src={review.user.avatar}
            alt={review.user.username}
            style={{
              width: "50px",
              aspectRatio: "1 / 1",
              borderRadius: "50%",
            }}
          />
          <strong>{review.user.username}</strong>
          <p>{review.content}</p>
          <p>{review.rating}</p>
        </Link>
      ))}
    </section>
  );
};
