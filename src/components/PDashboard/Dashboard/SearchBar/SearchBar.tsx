import React from "react";
import { ReactComponent as Search } from "assets/p-dashboard/search-bold.svg";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <Search />
      <input className={styles.inputSearch} type="text" placeholder="Search"/>
    </div>
  );
}
