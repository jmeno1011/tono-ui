import React from "react";
import styles from "./State.module.css";
import GaugeChart from "components/PDashboard/State/GaugeChart/GaugeChart";
import { RootState } from "store";
import { useSelector } from "react-redux";
import DonutChart from "components/PDashboard/State/DonutChart/DonutChart";

export default function State() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  console.log(surveyResult);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <GaugeChart score={"15점"} data={totalData} title={"Total"} />
        <GaugeChart score={"Lv 2"} data={levelData} title={"Level"} />
        <DonutChart />
        <div className={styles.filter}>filter</div>
      </div>
      <div className={styles.row}>
        
      </div>
    </div>
  );
}

const totalData = {
  labels: ["normal", "mild", "moderate", "severe"],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 6, 8, 39],
      backgroundColor: [
        "rgba(89, 212, 47, 0.8)",
        "rgba(184, 227, 39, 0.8)",
        "rgba(234, 228, 35, 0.8)",
        "rgba(255, 71, 26, 0.8)",
      ],
      borderColor: [
        "rgba(89, 212, 47, 1)",
        "rgba(184, 227, 39, 1)",
        "rgba(234, 228, 35, 1)",
        "rgba(255, 71, 26, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const levelData = {
  labels: ["Lv 1", "Lv 2", "Lv 3", "Lv 4", "Lv 5", "Lv 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [1, 1, 1, 1, 1, 1],
      backgroundColor: [
        "rgba(89, 212, 47, 0.9)",
        "rgba(134, 220, 43, 0.9)",
        "rgba(234, 228, 35, 0.9)",
        "rgba(241, 181, 32, 0.9)",
        "rgba(248, 129, 29, 0.9)",
        "rgba(255, 71, 26, 0.9)",
      ],
      borderColor: [
        "rgba(89, 212, 47, 1)",
        "rgba(134, 220, 43, 1)",
        "rgba(234, 228, 35, 1)",
        "rgba(241, 181, 32, 1)",
        "rgba(241, 181, 32, 1)",
        "rgba(248, 129, 29, 1)",
        "rgba(255, 71, 26, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
