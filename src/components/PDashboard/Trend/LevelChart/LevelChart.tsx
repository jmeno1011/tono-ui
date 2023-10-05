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
import { useSelector } from "react-redux";
import { RootState } from "store";
import { trendOption } from "lib/chartOptions";
import { ChartTitle, NoData } from "components/PDashboard/common";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LevelChart() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);

  return (
    <div className="trend__chart__container">
      <header>
        <ChartTitle>Level</ChartTitle>
      </header>
      <div className="trend__chart__wrapper">
        {surveyResult.length > 0 ? (
          <Line
            options={trendOption}
            data={{
              labels: surveyResult.map((survey) => survey.SEQ),
              datasets: [
                {
                  label: "level",
                  data: surveyResult.map((survey) => survey.LEVEL),
                  borderColor: "rgb(103, 80, 164)",
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
