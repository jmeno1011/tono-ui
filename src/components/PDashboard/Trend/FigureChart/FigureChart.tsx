import React from 'react'
import ChartTitle from '../ChartTitle/ChartTitle';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Datasets } from 'types/pType';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface FigureChartProps{
  figureData?: Datasets;
}

export default function FigureChart({figureData}:FigureChartProps) {
  return (
    <div className="trend__chart__container">
      <header>
        <ChartTitle>Figure</ChartTitle>
      </header>
      <div className="trend__chart__wrapper">{figureData && <Line options={options} data={figureData} />}</div>
    </div>
  )
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
