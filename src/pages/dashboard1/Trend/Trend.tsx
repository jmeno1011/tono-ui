import React, { useEffect, useState } from "react";
import TotalChart from "components/PDashboard/Trend/TotalChart/TotalChart";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Datasets } from "types/pType";
import styles from "./Trend.module.css";
import LevelChart from "components/PDashboard/Trend/LevelChart/LevelChart";
import FigureChart from "components/PDashboard/Trend/FigureChart/FigureChart";

export default function Trend() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);

  const [levelData, setLevelData] = useState<Datasets>({
    labels: [],
    datasets: [
      {
        label: "level",
        data: [],
        borderColor: "rgb(103, 80, 164)",
        backgroundColor: "rgb(103, 80, 164)",
      },
    ],
  });
  const [totalData, setTotalData] = useState<Datasets>({
    labels: [],
    datasets: [
      {
        label: "total",
        data: [],
        backgroundColor: "rgb(103, 80, 164)",
      },
    ],
  });
  const [figureData, setFigureData] = useState<Datasets>({
    labels: [],
    datasets: [
      {
        fill: true,
        label: "FIGURE1",
        data: [],
        borderColor: "rgb(103, 80, 164)",
        backgroundColor: "rgb(103, 80, 164, 0.5)",
      },
      {
        fill: true,
        label: "FIGURE2",
        data: [],
        borderColor: "rgb(157, 179, 88)",
        backgroundColor: "rgb(157, 179, 88, 0.5)",
      },
      {
        fill: true,
        label: "FIGURE3",
        data: [],
        borderColor: "rgb(48, 74, 150)",
        backgroundColor: "rgb(48, 74, 150, 0.5)",
      },
    ],
  });

  useEffect(() => {
    setLevelData((prev) => ({
      labels: surveyResult.map((survey) => survey.SEQ),
      datasets: prev.datasets.map((data) => ({
        ...data,
        data: surveyResult.map((survey) => survey.LEVEL),
      })),
    }));

    setTotalData((prev) => ({
      labels: surveyResult.map((survey) => survey.SEQ),
      datasets: prev.datasets.map((data) => ({
        ...data,
        data: surveyResult.map((survey) => survey.TOTAL),
      })),
    }));
    setFigureData((prev) => ({
      labels: surveyResult.map((survey) => survey.SEQ),
      datasets: [
        {
          ...prev.datasets[0],
          data: surveyResult.map((survey) => survey.FIGURE1),
        },
        {
          ...prev.datasets[1],
          data: surveyResult.map((survey) => survey.FIGURE2),
        },
        {
          ...prev.datasets[2],
          data: surveyResult.map((survey) => survey.FIGURE3),
        },
      ],
    }));
  }, [surveyResult]);

  return (
    <div className={styles.container}>
      <LevelChart levelData={levelData} />
      <TotalChart totalData={totalData} />
      <FigureChart figureData={figureData} />
    </div>
  );
}
