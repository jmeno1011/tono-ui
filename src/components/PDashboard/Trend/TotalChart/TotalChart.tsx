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
import { RootState } from "store";
import { useSelector } from "react-redux";
import { trendOption } from "lib/chartOptions";
import { ChartTitle, NoData } from "components/PDashboard/common";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TotalChart() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  return (
    <div className="trend__chart__container">
      <header>
        <ChartTitle>Total</ChartTitle>
      </header>
      <div className="trend__chart__wrapper">
        {surveyResult.length > 0 ? (
          <Bar
            options={trendOption}
            data={{
              labels: surveyResult.map((survey) => survey.SEQ),
              datasets: [
                {
                  label: "total",
                  data: surveyResult.map((survey) => survey.TOTAL),
                  backgroundColor: "rgb(103, 80, 164)",
                },
              ],
            }}
          />
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
}