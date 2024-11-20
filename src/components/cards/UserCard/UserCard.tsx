import { FC } from "react";
import { TUser } from "../../../types/types";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

interface UserCardProps {
  user: TUser;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Link to={`${routes.USERS}/${user.id}`}>
      <strong>{user.username}</strong>
      <h2>[[[[[{user.reviews.length}]]]]</h2>
      <img
        src={user.avatar}
        alt="avatar"
        style={{ width: "50px", aspectRatio: "1 / 1" }}
      />
    </Link>
  );
};
