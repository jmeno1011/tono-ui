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
import { trendOption } from "lib/chartOptions";
import { ChartTitle, NoData } from "components/PDashboard/common";
import { PSurveyResult } from "types/pType";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface FigureChartProps{
  surveyResult: PSurveyResult[];
}

export default function FigureChart({surveyResult}:FigureChartProps) {
  return (
    <div className="trend__chart__container">
      <header>
        <ChartTitle>Figure</ChartTitle>
      </header>
      <div className="trend__chart__wrapper">
        <div>
        {surveyResult.length > 0 ? (
          <Bar
            options={trendOption}
            data={{
              labels: surveyResult.map((survey) => survey.SEQ),
              datasets: [
                {
                  label: "FIGURE1",
                  data: surveyResult.map((survey) => survey.FIGURE1),
                  backgroundColor: "rgb(0, 143, 251)",
                  barPercentage: 0.5,
                },
                {
                  label: "FIGURE2",
                  data: surveyResult.map((survey) => survey.FIGURE2),
                  backgroundColor: "rgb(0, 227, 150)",
                  barPercentage: 0.5,
                },
                {
                  label: "FIGURE3",
                  data: surveyResult.map((survey) => survey.FIGURE3),
                  backgroundColor: "rgb(254, 176, 25)",
                  barPercentage: 0.5,
                },
              ],
            }}
          />
        ) : (
          <NoData />
        )}
        </div>
      </div>
    </div>
  );
}
