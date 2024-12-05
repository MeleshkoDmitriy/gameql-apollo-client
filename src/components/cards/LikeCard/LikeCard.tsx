import { FC } from "react";
import { TLikedGame } from "../../../types/types";
import styles from "./LikeCard.module.styl";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

interface LikeCardProps {
  game: TLikedGame;
}

export const LikeCard: FC<LikeCardProps> = ({ game }) => {
  return (
    <Link to={`${routes.GAMES}/${game.id}`} className={styles.card}>
      <img className={styles.cardImage} src={game.image} alt={game.title} />
      <h3 className={styles.cardTitle}>
        <span className={styles.cardTitleText}>{game.title}</span>
      </h3>
    </Link>
  );
};
