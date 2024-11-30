import { FC } from "react";
import { TGame, TReview } from "../../../../types/types";
import { GenresList } from "../../../lists/GenresList/GenresList";
import { PlatformsList } from "../../../lists/PlatformsList/PlatformsList";
import styles from "./Game.module.styl";
import { ButtonLike } from "../../../shared/Buttons/ButtonLike/ButtonLike";
import { calcAverageRating } from "../../../../utils/calcAverageRating";

interface GameProps {
  game: TGame;
}

export const Game: FC<GameProps> = ({ game }) => {
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
        <p className={styles.gameInfoRating}>Game rating: {calcAverageRating(game.reviews)} of 5</p>
        <ButtonLike isLiked={game.isAdminLiked} />
      </div>
    </section>
  );
};
