import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "redux/features/auth";
import { Outlet } from "react-router-dom";
import { Header, Nav } from "components/PDashboard/common";
import styles from "./PLayout.module.css";

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
