import { FC } from "react";
import { TUser } from "../../../types/types";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import styles from "./UserCard.module.styl";
import clsx from "clsx";

interface UserCardProps {
  user: TUser;
  params: { id?: string };
}

export const UserCard: FC<UserCardProps> = ({ user, params }) => {
  const cardClasses = clsx(styles.card, {
    [styles.active]: params.id === user.id,
  })

  return (
    <Link to={`${routes.USERS}/${user.id}`} className={cardClasses}>
      <img className={styles.cardAvatar} src={user.avatar} alt="avatar" />
      <strong className={styles.cardName}>{user.username}</strong>
      <p className={styles.cardReviews}>Reviews: {user.reviews.length}</p>
    </Link>
  );
};
