import React from "react";
import { ReactComponent as Search } from "assets/p-dashboard/search-bold.svg";
import styles from "./SearchModal.module.css";
import { UserInfo } from "types/pType";

interface SearchModalProps {
  onCloseModal: () => void;
  userList: UserInfo[];
}

export default function SearchModal({ onCloseModal, userList }: SearchModalProps) {
  console.log(userList);
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Search />
          <input type="text" placeholder="Search..."/>
        </header>
        검색
        <footer className={styles.footer}>
          <button onClick={onCloseModal}>close</button>
        </footer>
      </div>
    </div>
  );
}
