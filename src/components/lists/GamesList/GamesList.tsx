import { TGamesQuery } from "../../../types/types";
import { useSuspenseQuery } from "@apollo/client";
import { GET_ALL_GAMES } from "../../../apollo/query";
import { GameCard } from "../../cards/GameCard/GameCard";
import styles from "./GamesList.module.styl";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const GamesList = () => {
  const [parent] = useAutoAnimate();
  const { data: dataAllGames } = useSuspenseQuery<TGamesQuery>(GET_ALL_GAMES);

  const { games } = dataAllGames;

  return (
    <section className={styles.list} ref={parent}>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
      {games.length === 0 && <h3>No games available</h3>}
    </section>
  );
};
