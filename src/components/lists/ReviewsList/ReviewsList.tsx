import { FC } from "react";
import styles from "./ReviewsList.module.styl";
import { UserReview } from "../../reviews/UserReview/UserReview";
import { TReview } from "../../../types/types";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface ReviewsListProps {
  list: TReview[];
}

export const ReviewsList: FC<ReviewsListProps> = ({ list }) => {
  const [parent] = useAutoAnimate();

  return (
    <section className={styles.list} ref={parent}>
      {list
        .slice()
        .reverse()
        .map((review, index) => (
          <UserReview review={review} key={index} />
        ))}
    </section>
  );
};
