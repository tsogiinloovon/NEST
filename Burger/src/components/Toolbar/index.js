import React from "react";
import styles from "./style.module.css";    
import Logo from "../Logo";
import Menu from "../Menu";
import css from './style.module.css';
const Toolbar = () => (
  <header className={styles.Toolbar}>  
    <div>...</div>
    <Logo/>
    <nav className={css.HideOnMobile}>
      <Menu/>
    </nav>
  </header>
);
export default Toolbar;
