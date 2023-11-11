import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import styles from "./CalendarModal.module.css"
import CalendarComponent from 'components/PDashboard/Dashboard/CalendarComponent/CalendarComponent'
import { Value } from 'types/pType'
import { modalI } from 'pages/dashboard1/home/PDashboard';

interface CalendarModalProps {
  value: Value;
  onChange: React.Dispatch<React.SetStateAction<Value>>;
  onCloseModal: () => void;
  setOpenModal: Dispatch<SetStateAction<modalI>>;
}

export default function CalendarModal({ value, onChange, onCloseModal, setOpenModal }: CalendarModalProps) {

  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      modalRef.current &&
      target &&
      target.contains(modalRef.current) &&
      !modalRef.current.contains(target)
    ) {
      setOpenModal(prev => ({
        ...prev,
        showCalendar: false
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={modalRef}>
        <CalendarComponent value={value} onChange={onChange} />
        <div className={styles.closeButton}>
          <button onClick={onCloseModal}>close</button>
        </div>
      </div>
    </div>
  )
}
