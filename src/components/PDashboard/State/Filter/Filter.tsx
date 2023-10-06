import React from "react";
import styles from "./Filter.module.css";
import { RootState } from "store";
import { useSelector } from "react-redux";

export default function Filter() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  return (
    <div className={styles.container}>
      <h3>Filter</h3>
      <div className={styles.checkListBox}>
        {surveyResult
          .map((survey) => survey.SEQ)
          .map((value) => (
            <div key={value} className={styles.checkRow}>
              <input type="checkbox" id={value.toString()} />
              <label htmlFor={value.toString()}>{value}회차</label>
            </div>
          ))}
      </div>
    </div>
  );
}
