import { useSuspenseQuery } from "@apollo/client";
import { FC } from "react";
import {  TUserQuery } from "../../../types/types";
import { GET_USER_BY_ID } from "../../../apollo/query";
import { AccordionReview } from "../../reviews/AccordionReview/AccordionReview";
import styles from "./UserProfile.module.styl";
import { Verified } from "../../shared/Verified/Verified";
import { LikesList } from "../../lists/LikesList/LikesList";

interface UserProfileProps {
  id: string | undefined;
}

export const UserProfile: FC<UserProfileProps> = ({ id }) => {
  const { data: dataUserById } = useSuspenseQuery<TUserQuery>(GET_USER_BY_ID, {
    variables: { id },
  });

  const { user } = dataUserById;

  return (
    <div className={styles.profile}>
      <div className={styles.profileUser}>
        <div className={styles.profileUserAvatar}>
          <img
            className={styles.profileUserAvatarImage}
            src={user.avatar}
            alt={user.username}
          />
        </div>
        <strong className={styles.profileUserName}>
          {user.username} <Verified isVerified={user.isVerified} />
        </strong>
      </div>
      <div className={styles.profileReviews}>
        {id === "ADMIN" && <LikesList />}
        <AccordionReview reviews={user.reviews} />
      </div>
    </div>
  );
};
