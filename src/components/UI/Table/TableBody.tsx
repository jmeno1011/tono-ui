import React, { ReactNode } from "react";
import styles from "./TableBody.module.css"

interface TableBodyProps {
  children: ReactNode;
}

export default function TableBody({ children }: TableBodyProps) {
  return <tbody className={styles.tbody}>{children}</tbody>;
}
