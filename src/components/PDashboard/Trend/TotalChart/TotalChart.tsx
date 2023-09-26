import React from "react";
import ChartTitle from "../ChartTitle/ChartTitle";
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
import { Datasets } from "types/pType";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TotalChartProps {
  totalData?: Datasets;
}

export default function TotalChart({ totalData }: TotalChartProps) {
  return (
    <div className="trend__chart__container">
      <header>
        <ChartTitle>Total</ChartTitle>
      </header>
      <div className="trend__chart__wrapper">{totalData && <Bar options={options} data={totalData} />}</div>
    </div>
  );
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  aspectRatio: 5.5,
  animation: {
    duration: 0
  }
};
