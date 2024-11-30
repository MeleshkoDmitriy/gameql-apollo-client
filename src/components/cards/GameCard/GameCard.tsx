import { FC } from "react";
import { TGame } from "../../../types/types";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import styles from "./GameCard.module.styl";
import { GenresList } from "../../lists/GenresList/GenresList";

interface GameCardProps {
  game: TGame;
}

export const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Link className={styles.card} to={`${routes.GAMES}/${game.id}`}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardWrapperPicture}>
          <img
            className={styles.cardWrapperPictureImage}
            src={game.image}
            alt={game.title}
          />
        </div>
        <h2 className={styles.cardWrapperTitle}>{game.title}</h2>
        <p className={styles.cardWrapperPrice}>
          {game.price === 0 ? "Free to Play" : `${game.price} $`}
        </p>
        <GenresList list={game.genres} />
      </div>
    </Link>
  );
};
