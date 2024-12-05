import { useQuery } from "@apollo/client";
import styles from "./LikesList.module.styl";
import { GET_LIKED_GAMES } from "../../../apollo/query";
import { TLikedGame } from "../../../types/types";
import { LikeCard } from "../../cards/LikeCard/LikeCard";
import { Spinner } from "../../shared/Spinner/Spinner";

export const LikesList = () => {
  const { loading, error, data } = useQuery(GET_LIKED_GAMES);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

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
