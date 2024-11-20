import { NavLink } from "react-router-dom";
import { navigationRoutes } from "../../../routes/routes";

export const Header = () => {
  return (
    <header>
      {navigationRoutes.map((r) => {
        return (
          <NavLink to={r.path} key={r.label}>
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>{r.label}</span>
            )}
          </NavLink>
        );
      })}
    </header>
  );
};
