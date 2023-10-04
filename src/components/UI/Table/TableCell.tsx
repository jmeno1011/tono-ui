import React, { ReactNode } from "react";
import styles from "./TableCell.module.css";

interface TableCellProps {
  children: ReactNode;
}

export default function TableCell({ children }: TableCellProps) {
  return <td className={styles.td}>{children}</td>;
}
