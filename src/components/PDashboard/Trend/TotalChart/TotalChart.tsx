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
import NoData from "components/PDashboard/common/NoData/NoData";
import { RootState } from "store";
import { useSelector } from "react-redux";

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
            options={options}
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
