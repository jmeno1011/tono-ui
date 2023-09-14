import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card/Card";

export default function Cards() {
  return (
    <div className={styles.container}>
      <Card title={"Figure1"} figureResult={40} />
      <Card title={"Figure2"} figureResult={30} />
      <Card title={"Figure3"} figureResult={30} />
    </div>
  );
}
