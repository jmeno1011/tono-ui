import React, { useState } from "react";
import styles from "./PDashboard.module.css";
import UserInfo from "components/PDashboard/Dashboard/UserInfo/UserInfo";
import Title from "components/PDashboard/common/Title/Title";
import Cards from "components/PDashboard/Dashboard/Cards/Cards";
import SearchBar from "components/PDashboard/Dashboard/SearchBar/SearchBar";
import CalendarComponent from "components/PDashboard/Dashboard/CalendarComponent/CalendarComponent";
import { ReactComponent as Refresh } from "assets/p-dashboard/round-refresh.svg";
import { Value } from "types/pType";

export default function PDashboard() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title>Dashboard</Title>
        <div className={styles.btnGroup}>
          <SearchBar />
          <div className={styles.refresh}>
            <Refresh />
          </div>
        </div>
      </header>
      <div className={styles.summary}>
        <UserInfo />
        <Cards />
        <CalendarComponent value={value} onChange={onChange} />
      </div>
    </div>
  );
}
