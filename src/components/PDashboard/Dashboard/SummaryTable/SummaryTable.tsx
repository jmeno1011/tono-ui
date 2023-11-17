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
import styles from "./SummaryTable.module.css";
import NoData from "components/PDashboard/common/NoData/NoData";
import TableHeadCell from "components/UI/Table/TableHeadCell";

export default function SummaryTable() {
  const { surveyResult } = useSelector((state: RootState) => state.pDash);

  return (
    <div className={styles.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>INDEX</TableHeadCell>
            <TableHeadCell>CODE</TableHeadCell>
            <TableHeadCell>ROUND</TableHeadCell>
            <TableHeadCell>TOTAL</TableHeadCell>
            <TableHeadCell>LEVEL</TableHeadCell>
            <TableHeadCell>START_DATE</TableHeadCell>
            <TableHeadCell>END_DATE</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {surveyResult.length !== 0 ? (
            surveyResult.map((survey, index) => (
              <TableRow key={survey.END_DATE}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{survey.CODE}</TableCell>
                <TableCell>{survey.SEQ}</TableCell>
                <TableCell>{survey.TOTAL}</TableCell>
                <TableCell>{survey.LEVEL}</TableCell>
                <TableCell>{survey.START_DATE.replace("T", " ")}</TableCell>
                <TableCell>{survey.END_DATE.replace("T", " ")}</TableCell>
              </TableRow>
            ))
          ) : (
            <tr>
              <td colSpan={7} className={styles.noData}>
                <NoData />
              </td>
            </tr>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
