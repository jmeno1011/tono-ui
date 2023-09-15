import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {
  logout: () => void;
}

export default function Header({ logout }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div className={styles.home}>
        <Link to={"/p-dashboard"}>Home</Link>
      </div>
      <div className={styles.btnArea}>
        <Link to={"/"}>Go Tono UI</Link>
        <button onClick={logout}>Sign Out</button>
      </div>
    </header>
  );
}
