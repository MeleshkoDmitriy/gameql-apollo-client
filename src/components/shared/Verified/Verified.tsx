import { FC } from "react";
import { MdOutlineVerified } from "react-icons/md";
import styles from "./Verified.module.styl";

interface VerifiedProps {
  isVerified: boolean;
}

export const Verified: FC<VerifiedProps> = ({ isVerified }) => {
  return (
    <div className={styles.wrapper}>
      {isVerified === true ? <MdOutlineVerified className={styles.wrapperIcon} /> : null}
    </div>
  );
};
