import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  figureResult: number;
}

export default function Card({ title, figureResult }: CardProps) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <div className={styles.result}>
        <span>{figureResult}%</span>
      </div>
    </div>
  );
}
