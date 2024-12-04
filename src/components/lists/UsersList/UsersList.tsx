import { useSuspenseQuery } from "@apollo/client";
import { TUsersQuery } from "../../../types/types";
import { GET_ALL_USERS } from "../../../apollo/query";
import { UserCard } from "../../cards/UserCard/UserCard";
import styles from './UserList.module.styl'


export const UsersList = () => {
  const { data: dataAllUsers  } = useSuspenseQuery<TUsersQuery>(GET_ALL_USERS);

  const { users } = dataAllUsers;

  return (
    <section className={styles.list}>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </section>
  );
};
