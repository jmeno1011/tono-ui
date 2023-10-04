import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import styles from "./GaugeChart.module.css";
import classNames from "classnames/bind";
import { Anchor, Font } from "chartjs-plugin-datalabels/types/options";
const cn = classNames.bind(styles);

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    datalabels: {
      formatter: (value: any, context: any) => {
        const dataIndex = context.dataIndex;
        return context.chart.data.labels[dataIndex];
      },
      offset:()=> -10,
      align: (context: any) => {
        console.log(context.dataIndex);
        const len = context.dataset.data.length;
        const degree = 180 / len;
        return degree * context.dataIndex - degree + 10;
      },
      anchor: () => "end" as Anchor,
      font: () => {
        return {
          size: 16,
          weight: "bold"
        } as Font;
      },
    },
  },
  aspectRatio: 3 / 2,
  animation: {
    duration: 0,
  },
  rotation: 270,
  circumference: 180,
};

interface GaugeChartProps {
  score: string;
  data: {
    labels: string[];
    datasets: datasets[];
  };
}

type datasets = {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
};

export default function GaugeChart({ score, data }: GaugeChartProps) {
  return (
    <div className={cn("common__container", "container")}>
      <Doughnut data={data} options={options} />
      <div>
        <span>{score}</span>
      </div>
    </div>
  );
}
