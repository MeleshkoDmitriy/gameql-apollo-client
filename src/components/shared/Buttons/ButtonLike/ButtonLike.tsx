import clsx from "clsx";
import { ComponentPropsWithoutRef, FC } from "react";
import styles from "./ButtonLike.module.styl";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

interface ButtonLikeProps extends ComponentPropsWithoutRef<"button"> {
  isLiked: boolean;
}

export const ButtonLike: FC<ButtonLikeProps> = ({
  isLiked,
  onClick,
  ...rest
}) => {
  const buttonClasses = clsx(styles.button, {
    [styles.liked]: styles.isLiked,
  });
  return (
    <button onClick={onClick} className={buttonClasses} {...rest}>
      {isLiked ? (
        <AiFillLike className={styles.buttonIcon} />
      ) : (
        <AiOutlineLike className={styles.buttonIcon} />
      )}
    </button>
  );
};
