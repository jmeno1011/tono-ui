import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartTitle from "../ChartTitle/ChartTitle";
import { Datasets } from "types/pType";
import NoData from "components/PDashboard/common/NoData/NoData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LevelChartProps {
  levelData: Datasets;
}

export default function LevelChart({ levelData }: LevelChartProps) {
  return (
    <div className="trend__chart__container">
      <header>
        <ChartTitle>Level</ChartTitle>
      </header>
      <div className="trend__chart__wrapper">
        {levelData.labels.length > 0 ? (
          <Line options={options} data={levelData} redraw={true} />
        ) : (
          <NoData />
        )}
      </div>
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
    duration: 0,
  },
};
