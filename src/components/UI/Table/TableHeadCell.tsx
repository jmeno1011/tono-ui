import React, { ReactNode } from "react";
import styles from "./TableHeadCell.module.css"

interface TableHeadCellProps {
  children: ReactNode;
}

export default function TableHeadCell({ children }: TableHeadCellProps) {
  return <th className={styles.th}>{children}</th>;
}
