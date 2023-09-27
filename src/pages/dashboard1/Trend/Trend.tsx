import React, { useEffect, useState } from "react";
import TotalChart from "components/PDashboard/Trend/TotalChart/TotalChart";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Datasets } from "types/pType";
import styles from "./Trend.module.css"
import LevelChart from "components/PDashboard/Trend/LevelChart/LevelChart";
import FigureChart from "components/PDashboard/Trend/FigureChart/FigureChart";

export default function Trend() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  
  const [totalData, setTotalData] = useState<Datasets>();
  const [levelData, setLevelData] = useState<Datasets>();
  const [figureData, setFigureData] = useState<Datasets>();
  
  useEffect(()=>{
    const labels = surveyResult.map(survey => survey.SEQ);
    setTotalData({
      labels,
      datasets:[
        {
          label: 'total',
          data: surveyResult.map(survey => survey.TOTAL),
          backgroundColor: 'rgb(103, 80, 164)'
        }
      ]
    })
    setLevelData(
      {
        labels,
        datasets:[
          {
            label: 'total',
            data: surveyResult.map(survey => survey.LEVEL),
            borderColor: 'rgb(103, 80, 164)',
            backgroundColor: 'rgb(103, 80, 164)',
          }
        ]
      }
    )
    setFigureData(
      {
        labels,
        datasets:[
          {
            fill: true,
            label: 'FIGURE1',
            data: surveyResult.map(survey => survey.FIGURE1),
            borderColor: 'rgb(103, 80, 164)',
            backgroundColor: 'rgb(103, 80, 164, 0.5)',
          },
          {
            fill: true,
            label: 'FIGURE2',
            data: surveyResult.map(survey => survey.FIGURE2),
            borderColor: 'rgb(157, 179, 88)',
            backgroundColor: 'rgb(157, 179, 88, 0.5)',
          },
          {
            fill: true,
            label: 'FIGURE3',
            data: surveyResult.map(survey => survey.FIGURE3),
            borderColor: 'rgb(48, 74, 150)',
            backgroundColor: 'rgb(48, 74, 150, 0.5)',
          }
        ]
      }
    )
  },[surveyResult])
  return (
    <div className={styles.container}>
      <LevelChart levelData={levelData}/>
      <TotalChart totalData={totalData}/>
      <FigureChart figureData={figureData}/>
    </div>
  );
}
