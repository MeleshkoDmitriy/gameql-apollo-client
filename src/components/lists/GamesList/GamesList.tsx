import { TGamesQuery } from "../../../types/types";
import { useSuspenseQuery } from "@apollo/client";
import { GET_ALL_GAMES } from "../../../apollo/query";
import { GameCard } from "../../cards/GameCard/GameCard";

export const GamesList = () => {
  const { data: dataAllGames } = useSuspenseQuery<TGamesQuery>(GET_ALL_GAMES);

  const { games } = dataAllGames;

  return (
    <section style={{ display: 'flex' }}>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </section>
  );
};
