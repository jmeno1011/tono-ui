import React, { useState } from 'react'
import styles from "./PSurvey.module.css"
import { Title } from 'components/PDashboard/common'
import SurveyList from 'components/PDashboard/Dashboard/SurveyList/SurveyList'
import { IScore } from 'types/pType';

export default function PSurvey() {
  const [survey, setSurevey] = useState<IScore>({});

  const onChangeSurvey = (id: string, score: number) => {
    setSurevey((prev) => ({
      ...prev,
      [id]: {
        score: score
      }
    }));
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title>Survey</Title>
        <div>score:{SumScroe(survey)}</div>
      </header>
      <div className={styles.page}>
        <SurveyList onChangeSurvey={onChangeSurvey} survey={survey} />
      </div>
    </div>
  )
}

function SumScroe(survey: IScore){
  const arr = Object.values(survey);
  let total = 0;
  for(const index in arr){
    total += arr[index].score
  }
  return total;
}
