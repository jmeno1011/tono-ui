import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LayoutPosition } from "chart.js";
import styles from "./DonutChart.module.css";
import ChartTitle from 'components/PDashboard/Trend/ChartTitle/ChartTitle';

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
        "rgba(89, 212, 47, 0.8)",
        "rgba(234, 228, 35, 0.8)",
        "rgba(255, 71, 26, 0.8)",
      ],
      borderColor: [
        "rgba(89, 212, 47, 1)",
        "rgba(234, 228, 35, 1)",
        "rgba(255, 71, 26, 1)",
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