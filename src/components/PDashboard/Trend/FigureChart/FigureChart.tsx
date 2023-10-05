import React from "react";
import ChartTitle from "../ChartTitle/ChartTitle";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import NoData from "components/PDashboard/common/NoData/NoData";
import { RootState } from "store";
import { useSelector } from "react-redux";

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

export default function FigureChart() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  return (
    <div className="trend__chart__container">
      <header>
        <ChartTitle>Figure</ChartTitle>
      </header>
      <div className="trend__chart__wrapper">
        {surveyResult.length > 0 ? (
          <Line
            options={options}
            data={{
              labels: surveyResult.map((survey) => survey.SEQ),
              datasets: [
                {
                  fill: true,
                  label: "FIGURE1",
                  data: surveyResult.map((survey) => survey.FIGURE1),
                  borderColor: "rgb(103, 80, 164)",
                  backgroundColor: "rgb(103, 80, 164, 0.5)",
                },
                {
                  fill: true,
                  label: "FIGURE2",
                  data: surveyResult.map((survey) => survey.FIGURE2),
                  borderColor: "rgb(157, 179, 88)",
                  backgroundColor: "rgb(157, 179, 88, 0.5)",
                },
                {
                  fill: true,
                  label: "FIGURE3",
                  data: surveyResult.map((survey) => survey.FIGURE3),
                  borderColor: "rgb(48, 74, 150)",
                  backgroundColor: "rgb(48, 74, 150, 0.5)",
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
