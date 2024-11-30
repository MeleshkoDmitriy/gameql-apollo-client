import { FC } from "react";
import { Header } from "../Header/Header";
import "../../../styles/index.styl";
import clsx from "clsx";
import styles from "./Layout.module.styl";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const contentClasses = clsx("container", styles.content);
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={contentClasses}>{children}</main>
    </div>
  );
};
