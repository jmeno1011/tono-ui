import React from "react";
import styles from "./Card.module.css";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

interface CardProps {
  title: string;
  figureResult: number | string;
}

export default function Card({ title, figureResult }: CardProps) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <div className={styles.result}>
        <span className={cn(setColor(figureResult))}>
          {Number(figureResult) > 0 ? "+" + figureResult : figureResult}%
        </span>
      </div>
    </div>
  );
}

function setColor(str: string | number) {
  if (Number(str) > 0) {
    return "up";
  } else if (Number(str) < 0) {
    return "down";
  } else {
    return "normal";
  }
}
