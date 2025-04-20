import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigates.module.css";

const Navigates = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.linksWrapper}>
      <NavLink className={buildLinkClass} to="cast">
        Cast
      </NavLink>
      <NavLink className={buildLinkClass} to="reviews">
        Reviews
      </NavLink>
    </div>
  );
};
export default Navigates;
