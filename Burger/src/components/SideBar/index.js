import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";
const SideBar = () => {
  return (
    <div>
      <div className={css.SideBar}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
      ;
    </div>
  );
};
export default SideBar;
