import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  switchTheme: () => void;
  theme: string;
}

export default function Header({ switchTheme, theme }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div>
        <h1>header</h1>
        <button onClick={switchTheme}>{theme}</button>
      </div>
    </header>
  );
}
