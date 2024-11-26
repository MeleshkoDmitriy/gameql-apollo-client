import { NavLink } from "react-router-dom";
import { navigationRoutes } from "../../../routes/routes";
import styles from "./Header.module.styl";
import "../../../styles/index.styl";
import clsx from "clsx";

export const Header = () => {
  const wrapperClasses = clsx(styles.headerWrapper, "container");
  return (
    <header className={styles.header}>
      <div className={wrapperClasses}>
        <div className={styles.headerWrapperLogo}>Logos</div>
        <nav className={styles.headerWrapperNav}>
          {navigationRoutes.map((route) => {
            return (
              <NavLink to={route.path} key={route.label}>
                {({ isActive }) => (
                  <span
                    className={clsx(styles.headerWrapperNavNavLink, {
                      [styles.active]: isActive,
                    })}
                  >
                    {route.label}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
