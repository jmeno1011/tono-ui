import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "components/UI/Table";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import styles from "./OverView.module.css"

export default function OverView() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);

  return (
    <div className={styles.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>INDEX</TableCell>
            <TableCell>CODE</TableCell>
            <TableCell>ROUND</TableCell>
            <TableCell>TOTAL</TableCell>
            <TableCell>LEVEL</TableCell>
            <TableCell>START_DATE</TableCell>
            <TableCell>END_DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {surveyResult.map((survey, index) => (
            <TableRow key={survey.END_DATE}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{survey.CODE}</TableCell>
              <TableCell>{survey.SEQ}</TableCell>
              <TableCell>{survey.TOTAL}</TableCell>
              <TableCell>{survey.LEVEL}</TableCell>
              <TableCell>{survey.START_DATE.replace("T", " ")}</TableCell>
              <TableCell>{survey.END_DATE.replace("T", " ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
