import React, { ReactNode } from "react";
import styles from "./TableHead.module.css";

interface TableHeadProps {
  children: ReactNode;
}

export default function TableHead({ children }: TableHeadProps) {
  return <thead className={styles.thead}>{children}</thead>;
}
