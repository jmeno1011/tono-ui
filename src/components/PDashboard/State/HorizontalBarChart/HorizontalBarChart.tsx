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
import { QUESTION_LIST } from "lib/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface HorizontalBarChartProps{
  selectedRound: number[];
}

export default function HorizontalBarChart({selectedRound}:HorizontalBarChartProps) {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  const lastSurveyResult: { [key: string]: any } =
    surveyResult[selectedRound.length > 0 ? selectedRound[selectedRound.length - 1] - 1 : surveyResult.length - 1];
    
  return (
    <div className={styles.container}>
      <ChartTitle>HorizontalBarChart</ChartTitle>
      <Bar
        options={options}
        data={{
          labels: QUESTION_LIST,
          datasets: [
            {
              label: "total",
              data: QUESTION_LIST.map((question) => lastSurveyResult[question]),
              backgroundColor: [
                "rgb(103, 80, 164)",
                "rgb(157, 179, 88)",
                "rgb(48, 74, 150)",
              ],
              borderColor: "rgb(103, 80, 164)",
            },
          ],
        }}
      />
    </div>
  );
}

const options = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false
    }
  },
  aspectRatio: 300 / 285,
};
