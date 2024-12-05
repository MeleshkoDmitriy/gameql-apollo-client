import { useQuery } from "@apollo/client";
import styles from "./LikesList.module.styl";
import { GET_LIKED_GAMES } from "../../../apollo/query";
import { TLikedGame } from "../../../types/types";
import { LikeCard } from "../../cards/LikeCard/LikeCard";

export const LikesList = () => {
  const { data } = useQuery(GET_LIKED_GAMES);

  return (
    <>
    <h2 className={styles.title}>
      {data?.likedGames.length > 0 ? 'Liked games' : 'No Likes yet'}
    </h2>
    <div className={styles.list}>
      {data &&
        data.likedGames.map((game: TLikedGame) => (
          <LikeCard game={game} key={game.id} />
        ))}
    </div>
    </>
  );
};
