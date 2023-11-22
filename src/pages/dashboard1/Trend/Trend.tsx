import React from "react";
import styles from "./Trend.module.css";
import { FigureChart, LevelChart } from "components/PDashboard/Trend";
import { useSelector } from "react-redux";
import { RootState } from "store";

export default function Trend() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  return (
    <div className={styles.container}>
      <LevelChart surveyResult={surveyResult} />
      <FigureChart surveyResult={surveyResult} />
    </div>
  );
}
