import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./HorizontalBarChart.module.css";
import { ChartTitle } from "components/PDashboard/common";
import { RootState } from "store";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function HorizontalBarChart() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  return (
    <div className={styles.container}>
      <ChartTitle>HorizontalBarChart</ChartTitle>
      <Bar options={options} data={{
              labels: surveyResult.map((survey) => survey.SEQ),
              datasets: [
                {
                  label: "total",
                  data: surveyResult.map((survey) => survey.TOTAL),
                  backgroundColor: "rgb(103, 80, 164)",
                },
              ],
            }} />
    </div>
  );
}

const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    }
  },
};
