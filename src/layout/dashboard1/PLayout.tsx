import React from "react";
import { useDispatch } from "react-redux";
import Header from "components/PDashboard/common/Header/Header";
import Nav from "components/PDashboard/common/Nav/Nav";
import styles from "./PLayout.module.css";
import { logout } from "redux/features/auth";
import { Outlet } from "react-router-dom";

export default function PLayout() {
  const dispath = useDispatch();
  const onLogout = () => {
    const logData = {
      div: "p",
    };
    dispath(logout(logData));
  };
  return (
    <div className={styles.container}>
      <Header logout={onLogout} />
      <div className={styles.wrapper}>
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
