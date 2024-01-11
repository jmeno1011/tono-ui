import React from 'react'
import styles from "./PSurvey.module.css"
import { Title } from 'components/PDashboard/common'
import SurveyList from 'components/PDashboard/Dashboard/SurveyList/SurveyList'

export default function PSurvey() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title>Survey</Title>
      </header>
      <div className={styles.page}>
        <SurveyList />
      </div>
    </div>
  )
}
