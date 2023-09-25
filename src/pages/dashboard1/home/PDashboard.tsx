import React, { useState, useEffect } from "react";
import styles from "./PDashboard.module.css";
import UserInfo from "components/PDashboard/Dashboard/UserInfo/UserInfo";
import Title from "components/PDashboard/common/Title/Title";
import Cards from "components/PDashboard/Dashboard/Cards/Cards";
import SearchBar from "components/PDashboard/Dashboard/SearchBar/SearchBar";
import CalendarComponent from "components/PDashboard/Dashboard/CalendarComponent/CalendarComponent";
import { ReactComponent as Refresh } from "assets/p-dashboard/round-refresh.svg";
import { UserInfo as UserInfoType, Value } from "types/pType";
import Tabs from "components/PDashboard/Dashboard/Tabs/Tabs";
import { Outlet, useLocation } from "react-router-dom";
import ModalPortal from "components/PDashboard/common/ModalPortal/ModalPortal";
import SearchModal from "components/PDashboard/common/ModalPortal/SearchModal";
import { db } from "lib/api";

export default function PDashboard() {
  const {pathname} = useLocation();
  const [userList, setUserList] = useState<UserInfoType[]>([]);
  const [value, onChange] = useState<Value>(new Date());
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = ()=>{
    setOpenModal(true)
  }
  const onCloseModal = ()=>{
    setOpenModal(false);
  }

  useEffect(()=>{
    fetchUserList();
  },[])

  const fetchUserList = async ()=>{
    let {data, error} = await db.getPUser().select("*").order("id", {ascending: false});
    if(error) console.log("error: ", error);
    else setUserList(data as UserInfoType[]);
  }
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title>Dashboard</Title>
        {/* <div>{test}</div> */}
        <div className={styles.btnGroup}>
          <SearchBar onOpenModal={onOpenModal} />
          <div className={styles.refresh}>
            <Refresh />
          </div>
        </div>
      </header>
      <div className={styles.summary}>
        <UserInfo />
        <Cards />
        <CalendarComponent value={value} onChange={onChange} />
      </div>
      <Tabs />
      <main className={styles.main}>
        <Outlet />
        {
          pathname === "/p-dashboard" && <div className={styles.overview}>

          </div>
        }
      </main>
      {
        openModal && (
          <ModalPortal>
            <SearchModal onCloseModal={onCloseModal} userList={userList}/>
          </ModalPortal>
        )
      }
    </div>
  );
}
