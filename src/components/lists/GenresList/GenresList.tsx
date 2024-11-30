import { FC } from "react";
import styles from "./GenresList.module.styl";

interface GenresListProps {
  list: string[];
}

export const GenresList: FC<GenresListProps> = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((genre, index) => (
        <span className={styles.listItem} key={index}>
          {genre}
        </span>
      ))}
    </div>
  );
};
