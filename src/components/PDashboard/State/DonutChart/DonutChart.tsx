import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LayoutPosition } from "chart.js";
import styles from "./DonutChart.module.css";
import ChartTitle from 'components/PDashboard/common/ChartTitle/ChartTitle';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  return (
    <div className={styles.container}>
      <header>
      <ChartTitle>Figure</ChartTitle>
      </header>
      <Doughnut data={data} options={options} />
    </div>
  )
}

const data ={
  labels: ["normal", "mild", "moderate"],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 6, 8],
      backgroundColor: [
        "rgba(103, 80, 164, 0.8)",
        "rgba(157, 179, 88, 0.8)",
        "rgba(48, 74, 150, 0.8)",
      ],
      borderColor: [
        "rgba(103, 80, 164, 1)",
        "rgba(157, 179, 88, 1)",
        "rgba(48, 74, 150, 1)",
      ],
      borderWidth: 1,
    },
  ],
};


const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'right' as LayoutPosition
    },
    title: {
      display: false,
    }
  },
  aspectRatio: 2,
  animation: {
    duration: 0,
  },
};