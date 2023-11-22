import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { ModalState, Value } from "types/pType";
import { CalendarComponent } from "components/PDashboard/Dashboard";
import styles from "./CalendarModal.module.css";

interface CalendarModalProps {
  value: Value;
  onChange: React.Dispatch<React.SetStateAction<Value>>;
  onCloseModal: () => void;
  setOpenModal: Dispatch<SetStateAction<ModalState>>;
}

export default function CalendarModal({
  value,
  onChange,
  onCloseModal,
  setOpenModal,
}: CalendarModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        modalRef.current &&
        target &&
        target.contains(modalRef.current) &&
        !modalRef.current.contains(target)
      ) {
        setOpenModal((prev) => ({
          ...prev,
          showCalendar: false,
        }));
      }
    },
    [setOpenModal]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={modalRef}>
        <CalendarComponent value={value} onChange={onChange} />
        <div className={styles.closeButton}>
          <button onClick={onCloseModal}>close</button>
        </div>
      </div>
    </div>
  );
}
