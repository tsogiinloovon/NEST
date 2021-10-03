import React from "react";
import css from "./style.module.css";
const MenuItem = (probs) => {
  return (
  <li className={css.MenuItem}>
    <a className={probs.active ? css.active : null} href={probs.link}>
      {probs.children}
    </a>
  </li>);
};
export default MenuItem;
