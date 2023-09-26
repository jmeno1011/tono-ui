import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Figures, PSurveyResult } from "types/pType";

export default function Cards() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);
  const [figures, setFigures] = useState<Figures>({
    figure1: 0,
    figure2: 0,
    figure3: 0,
  });
  useEffect(() => {
    setFigures(getFigureDiffer(surveyResult));
  }, []);
  // const figures = getFigureDiffer(surveyResult);
  return (
    <div className={styles.container}>
      <Card title={"Figure1"} figureResult={figures.figure1} />
      <Card title={"Figure2"} figureResult={figures.figure2} />
      <Card title={"Figure3"} figureResult={figures.figure3} />
    </div>
  );
}

function getFigureDiffer(arr: PSurveyResult[]) {
  const array = arr.filter(
    (value: PSurveyResult) => value.PROCESS_STATE === "완료됨"
  );
  const len = array.length;

  if (len === 0) {
    return {
      figure1: 0,
      figure2: 0,
      figure3: 0,
    };
  } else if (len === 1) {
    return {
      figure1: array[0]?.FIGURE1,
      figure2: array[0]?.FIGURE2,
      figure3: array[0]?.FIGURE3,
    };
  } else {
    return {
      figure1: (array[len - 1]?.FIGURE1 - array[len - 2]?.FIGURE1).toFixed(2),
      figure2: (array[len - 1]?.FIGURE2 - array[len - 2]?.FIGURE2).toFixed(2),
      figure3: (array[len - 1]?.FIGURE3 - array[len - 2]?.FIGURE3).toFixed(2),
    };
  }
}
