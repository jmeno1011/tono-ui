import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { trendOption } from "lib/chartOptions";
import { ChartTitle, NoData } from "components/PDashboard/common";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export default function LevelChart() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);

  const data = {
    labels: surveyResult.map((survey) => survey.SEQ),
    datasets: [
      {
        type: 'bar' as const,
        label: "total",
        data: surveyResult.map((survey) => survey.TOTAL),
        backgroundColor: "rgb(0, 143, 251)",
        yAxisID: 'y',
        barPercentage: 0.2,
      },
      {
        type: 'line' as const,
        label: "level",
        data: surveyResult.map((survey) => survey.LEVEL),
        borderColor: "rgb(255, 69, 96)",
        yAxisID: 'y1',
      },
    ],
  };

  return (
    <div className="trend__chart__container">
      <header>
        <ChartTitle>Total & Level</ChartTitle>
      </header>
      <div className="trend__chart__wrapper">
        <div>
          {surveyResult.length > 0 ? (
            <Chart type='bar' options={trendOption} data={data} />
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </div>
  );
}
