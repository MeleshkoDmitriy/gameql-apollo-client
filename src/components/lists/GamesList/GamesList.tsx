import { TGamesQuery } from "../../../types/types";
import { useSuspenseQuery } from "@apollo/client";
import { GET_ALL_GAMES } from "../../../apollo/query";
import { GameCard } from "../../cards/GameCard/GameCard";
import styles from './GamesList.module.styl'

export const GamesList = () => {
  const { data: dataAllGames } = useSuspenseQuery<TGamesQuery>(GET_ALL_GAMES);

  const { games } = dataAllGames;

  return (
    <section className={styles.list}>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </section>
  );
};
