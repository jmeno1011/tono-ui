import React, { useState, useEffect } from "react";
import styles from "./PDashboard.module.css";
import UserInfo from "components/PDashboard/Dashboard/UserInfo/UserInfo";
import Title from "components/PDashboard/common/Title/Title";
import Cards from "components/PDashboard/Dashboard/Cards/Cards";
import SearchBar from "components/PDashboard/Dashboard/SearchBar/SearchBar";
import CalendarComponent from "components/PDashboard/Dashboard/CalendarComponent/CalendarComponent";
import { ReactComponent as Refresh } from "assets/p-dashboard/round-refresh.svg";
import { Value } from "types/pType";
import Tabs from "components/PDashboard/Dashboard/Tabs/Tabs";
import { Outlet, useLocation } from "react-router-dom";
import ModalPortal from "components/PDashboard/common/ModalPortal/ModalPortal";
import SearchModal from "components/PDashboard/common/ModalPortal/SearchModal";
import { createClient } from '@supabase/supabase-js'
import { Database } from "types/database.types";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || "";

const supabase = createClient<any>(supabaseUrl, supabaseKey);

export default function PDashboard() {
  const {pathname} = useLocation();
  const [value, onChange] = useState<Value>(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [test, setTest] = useState<any>();
  const onOpenModal = ()=>{
    setOpenModal(true)
  }
  const onCloseModal = ()=>{
    setOpenModal(false);
  }
  // console.log("modal:", openModal);
  const dataFetch =async () => {
    console.log(supabase);
    
    let { data, error } = await supabase.from('P_USER').select();
    console.log(data);
    console.log(error);
    // setTest(data);
  }

  useEffect(()=>{
    dataFetch();
  },[])
  
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
            <SearchModal onCloseModal={onCloseModal}/>
          </ModalPortal>
        )
      }
    </div>
  );
}
