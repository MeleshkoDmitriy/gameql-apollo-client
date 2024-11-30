import { FC } from "react";
import styles from "./PlatformsList.module.styl";

interface PlatformsListProps {
  list: string[];
}

export const PlatformsList: FC<PlatformsListProps> = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((platform, index) => (
        <span className={styles.listItem} key={index}>
          {platform}
        </span>
      ))}
    </div>
  );
};
