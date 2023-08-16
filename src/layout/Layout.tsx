import React from "react";
import styles from "./Layout.module.css";
import Nav from "components/common/Nav/Nav";
import { Header } from "components/common";
import { Outlet } from "react-router-dom";
import useLocalStorage from "hooks/useLocalStorage";

export default function Layout() {
  const defaultTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  console.log(defaultTheme);

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultTheme ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className={styles.container} data-theme={theme}>
      <Nav />
      <Header />
      <button onClick={switchTheme}>{theme}</button>
      <div className={styles.wrapper}>
        <div className={styles.page}>
            <Outlet />
        </div>
      </div>
    </div>
  );
}
