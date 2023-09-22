import React from "react";
import { ReactComponent as Search } from "assets/p-dashboard/search-bold.svg";
import styles from "./SearchBar.module.css";

interface SearchBarProps{
  onOpenModal: ()=>void;
}

export default function SearchBar({onOpenModal}:SearchBarProps) {
  return (
    <div className={styles.container} onClick={onOpenModal}>
      <Search />
      <span>Search</span>
    </div>
  );
}
