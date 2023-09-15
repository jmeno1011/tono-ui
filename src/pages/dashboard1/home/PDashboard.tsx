import React from "react";
import styles from "./PDashboard.module.css";
import UserInfo from "components/PDashboard/Dashboard/UserInfo/UserInfo";
import Title from "components/PDashboard/common/Title/Title";
import Cards from "components/PDashboard/Dashboard/Cards/Cards";
import SearchBar from "components/PDashboard/Dashboard/SearchBar/SearchBar";

export default function PDashboard() {
  return (
    <div className={styles.container}>
      <Title>Dashboard</Title>
      <SearchBar />
      <div className={styles.summary}>
      <UserInfo />
      <Cards />
      </div>
    </div>
  );
}
