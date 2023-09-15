import React from "react";
import Calendar from "react-calendar";
import { Value } from "types/pType";
import "./CustomCalendar.css";
import styles from "./CalendarComponent.module.css";
import dayjs from "dayjs";

interface CalendarComponentProps {
  value: Value;
  onChange: (value: Value, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CalendarComponent({
  value,
  onChange,
}: CalendarComponentProps) {
  return (
    <div className={styles.container}>
      <Calendar
        value={value}
        onChange={onChange}
        calendarType="gregory"
        formatDay={(locale, date) => dayjs(date).format("D")}
      />
    </div>
  );
}
