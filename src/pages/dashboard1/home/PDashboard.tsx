import React, { useState, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as Refresh } from "assets/p-dashboard/round-refresh.svg";
import { ReactComponent as CalendarIcon } from "assets/p-dashboard/calendar.svg";
import { ModalState, PUserInfo, Value } from "types/pType";
import { db } from "lib/services/api";
import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import {
  userCodeAction,
  userAction,
  userListAction,
  surveyResultAction,
} from "redux/features/pDashboard";
import {
  CalendarModal,
  ModalPortal,
  SearchModal,
  Title,
} from "components/PDashboard/common";
import {
  CalendarComponent,
  Cards,
  SearchBar,
  SummaryTable,
  Tabs,
  UserInfo,
} from "components/PDashboard/Dashboard";

import styles from "./PDashboard.module.css";

export default function PDashboard() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.pDash);
  const [value, onChange] = useState<Value>(new Date());
  const [openModal, setOpenModal] = useState<ModalState>({
    showCalendar: false,
    showSearchbar: false,
  });
  const onOpenModal = (type: string) => {
    if (type === "search") {
      setOpenModal({
        ...openModal,
        showSearchbar: true,
      });
    } else if (type === "calendar") {
      setOpenModal({
        ...openModal,
        showCalendar: true,
      });
    }
  };
  const onCloseModal = () => {
    setOpenModal({
      showCalendar: false,
      showSearchbar: false,
    });
  };

  const onClickRefresh = () => {
    dispatch(userCodeAction(""));
    dispatch(userAction(null));
    dispatch(surveyResultAction([]));
  };

  const fetchUserList = useCallback(async () => {
    let { data, error } = await db
      .selectUserInfo()
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      console.log("error: ", error);
    } else {
      dispatch(userListAction(data as PUserInfo[]));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title>Dashboard</Title>
        <div className={styles.btnGroup}>
          <div
            className={styles.iconBox}
            onClick={() => onOpenModal("calendar")}
          >
            <CalendarIcon />
            <span>calendar</span>
          </div>
          <SearchBar onOpenModal={onOpenModal} />
          <div className={styles.iconBox} onClick={onClickRefresh}>
            <Refresh />
            <span>clear</span>
          </div>
        </div>
      </header>
      <div className={styles.summary}>
        <UserInfo user={user} />
        <Cards />
        <CalendarComponent value={value} onChange={onChange} />
      </div>
      <Tabs />
      <main className={styles.main}>
        <Outlet />
        {pathname === "/p-dashboard" && (
          <div className={styles.overview}>
            <SummaryTable />
          </div>
        )}
      </main>
      <ModalPortal>
        {openModal.showSearchbar && !openModal.showCalendar ? (
          <SearchModal
            onCloseModal={onCloseModal}
            setOpenModal={setOpenModal}
          />
        ) : openModal.showCalendar && !openModal.showSearchbar ? (
          <CalendarModal
            value={value}
            onChange={onChange}
            onCloseModal={onCloseModal}
            setOpenModal={setOpenModal}
          />
        ) : null}
      </ModalPortal>
    </div>
  );
}
