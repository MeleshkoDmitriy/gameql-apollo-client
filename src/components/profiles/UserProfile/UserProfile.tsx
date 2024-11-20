import { useSuspenseQuery } from "@apollo/client";
import { FC } from "react";
import { TUserQuery } from "../../../types/types";
import { GET_USER_BY_ID } from "../../../apollo/query";
import { AccordionReview } from "../../reviews/AccordionReview/AccordionReview";

interface UserProfileProps {
  id: string | undefined;
}

export const UserProfile: FC<UserProfileProps> = ({ id }) => {
  const { data: dataUserById } = useSuspenseQuery<TUserQuery>(GET_USER_BY_ID, {
    variables: { id },
  });

  const { user } = dataUserById;

  return (
    <div>
      <img
        src={user.avatar}
        alt={user.username}
        style={{ width: "200px", aspectRatio: "1 / 1", borderRadius: "50%" }}
      />
      <strong>{user.username}</strong>
      <p>{user.isVerified === true ? 'true' : 'false' }</p>
      <AccordionReview reviews={user.reviews} />
    </div>
  );
};
