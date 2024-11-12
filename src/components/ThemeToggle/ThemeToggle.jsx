import React, { useContext } from "react";
import styles from "./ThemeToggle.module.scss";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.png";
import { ThemeContext } from "../../context/ThemeProvider";

export default function ThemeToggle() {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <button className={styles.theme_btn} onClick={changeTheme}>
      <img
        src={isLight ? moon : sun}
        alt={isLight ? "dark mode" : "light mode"}
      />
    </button>
  );
}