import React, { ReactNode } from "react";
import styles from "./ChartTitle.module.css"

interface ChartTitleProps {
  children: ReactNode;
}

export default function ChartTitle({ children }: ChartTitleProps) {
  return <h3 className={styles.container}>{children}</h3>;
}
