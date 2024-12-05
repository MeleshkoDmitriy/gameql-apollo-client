import { FC } from "react";
import { TGame } from "../../../../types/types";
import { GenresList } from "../../../lists/GenresList/GenresList";
import { PlatformsList } from "../../../lists/PlatformsList/PlatformsList";
import styles from "./Game.module.styl";
import { ButtonLike } from "../../../shared/Buttons/ButtonLike/ButtonLike";
import { calcAverageRating } from "../../../../utils/calcAverageRating";
import { LIKE_GAME } from "../../../../apollo/mutation";
import { GET_GAME_BY_ID, GET_LIKED_GAMES } from "../../../../apollo/query";
import { useMutation } from "@apollo/client";
import { Spinner } from "../../../shared/Spinner/Spinner";

interface GameProps {
  game: TGame;
}

export const Game: FC<GameProps> = ({ game }) => {
  const [likeGame, { loading }] = useMutation(LIKE_GAME, {
    update(cache, { data: { likeGameByAdmin } }) {
      const cachedGame = cache.readQuery<{ game: TGame }>({
        query: GET_GAME_BY_ID,
        variables: { id: game.id },
      });

      if (cachedGame) {
        cache.writeQuery({
          query: GET_GAME_BY_ID,
          variables: { id: game.id },
          data: {
            game: {
              ...cachedGame.game,
              isAdminLiked: likeGameByAdmin.isAdminLiked,
            },
          },
        });
      }
    },
    refetchQueries: [{ query: GET_LIKED_GAMES }],
  });

  const handleLikeClick = async () => {
    try {
      await likeGame({ variables: { id: game.id } });
    } catch (error) {
      console.error("Error liking game:", error);
    }
  };

  return (
    <section className={styles.game}>
      <div className={styles.gamePicture}>
        <img
          className={styles.gamePictureImage}
          src={game.image}
          alt={game.title}
        />
      </div>
      <div className={styles.gameInfo}>
        <h1 className={styles.gameInfoTitle}>Game Page {game.title}</h1>
        <p className={styles.gameInfoDesc}>{game.description}</p>
        <GenresList list={game.genres} />
        <PlatformsList list={game.platforms} />
        <p className={styles.gameInfoRating}>
          Game rating: {calcAverageRating(game.reviews)} of 5
        </p>
        {loading ? (
          <Spinner />
        ) : (
          <ButtonLike isLiked={game.isAdminLiked} onClick={handleLikeClick} />
        )}
      </div>
    </section>
  );
};
