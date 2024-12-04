import { FC } from "react";
import { TUser } from "../../../types/types";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import styles from "./UserCard.module.styl";

interface UserCardProps {
  user: TUser;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Link to={`${routes.USERS}/${user.id}`} className={styles.card}>
      <img
        className={styles.cardAvatar}
        src={user.avatar}
        alt="avatar"
      />
      <strong className={styles.cardName}>{user.username}</strong>
      <p className={styles.cardReviews}>Reviews: {user.reviews.length}</p>
    </Link>
  );
};
