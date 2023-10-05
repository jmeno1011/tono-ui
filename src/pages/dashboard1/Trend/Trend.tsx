import React from "react";
import TotalChart from "components/PDashboard/Trend/TotalChart/TotalChart";
import styles from "./Trend.module.css";
import LevelChart from "components/PDashboard/Trend/LevelChart/LevelChart";
import FigureChart from "components/PDashboard/Trend/FigureChart/FigureChart";

export default function Trend() {
  return (
    <div className={styles.container}>
      <LevelChart />
      <TotalChart />
      <FigureChart />
    </div>
  );
}
