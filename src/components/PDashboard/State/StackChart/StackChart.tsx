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

import styles from "./StackChart.module.css";
import { ChartTitle } from "components/PDashboard/common";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { Font } from "chartjs-plugin-datalabels/types/options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StackChartProps {
  selectedRound: number[];
}

export default function StackChart({ selectedRound }: StackChartProps) {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);

  return (
    <div className={styles.container}>
      <ChartTitle>Figure Stack</ChartTitle>
      {
        surveyResult.length > 0 ?
        <Bar
          options={options}
          data={{
            labels: surveyResult.map((survey) => survey.SEQ),
            datasets: [
              {
                label: "FIGURE1",
                data: surveyResult.map((survey) => survey.FIGURE1),
                borderColor: "rgb(103, 80, 164)",
                backgroundColor: "rgb(103, 80, 164, 0.5)",
              },
              {
                label: "FIGURE2",
                data: surveyResult.map((survey) => survey.FIGURE2),
                borderColor: "rgb(157, 179, 88)",
                backgroundColor: "rgb(157, 179, 88, 0.5)",
              },
              {
                label: "FIGURE3",
                data: surveyResult.map((survey) => survey.FIGURE3),
                borderColor: "rgb(48, 74, 150)",
                backgroundColor: "rgb(48, 74, 150, 0.5)",
              },
            ],
          }}
        /> : <div>no data</div>
      }
    </div>
  );
}

const options = {
  indexAxis: "y" as const,
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  aspectRatio: 300 / 285,
  plugins: {
    datalabels: {
      font: () => {
        return {
          size: 14,
          weight: "bold",
        } as Font;
      },
    },
  },
};
