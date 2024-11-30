import { useSuspenseQuery } from "@apollo/client";
import { FC } from "react";
import { TGameQuery } from "../../../types/types";
import { GET_GAME_BY_ID } from "../../../apollo/query";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { ReviewForm } from "../../forms/ReviewForm/ReviewForm";
import { constants } from "../../../utils/constants";
import { Game } from "./Game/Game";
import { UserReview } from "../../reviews/UserReview/UserReview";
import { ReviewsList } from "../../lists/ReviewsList/ReviewsList";

interface GameProfileProps {
  id: string | undefined;
}

export const GameProfile: FC<GameProfileProps> = ({ id }) => {
  const { data: dataGameById } = useSuspenseQuery<TGameQuery>(GET_GAME_BY_ID, {
    variables: { id },
  });

  const { game } = dataGameById;

  return (
    <div>
      <Game game={game} />
      <ReviewForm gameId={game.id} userId={constants.adminID} />
      <ReviewsList list={game.reviews} />
    </div>
  );
};
