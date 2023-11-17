import React from "react";
import styles from "./Tabs.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Tabs() {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <Link
        className={"/p-dashboard" === pathname ? styles.tabClass : ""}
        to={"/p-dashboard"}
      >
        <span>Summary Table</span>
      </Link>
      <Link
        className={"/p-dashboard/trend" === pathname ? styles.tabClass : ""}
        to={"/p-dashboard/trend"}
      >
        <span>Description</span>
      </Link>
      <Link
        className={"/p-dashboard/state" === pathname ? styles.tabClass : ""}
        to={"/p-dashboard/state"}
      >
        <span>State</span>
      </Link>
    </div>
  );
}
