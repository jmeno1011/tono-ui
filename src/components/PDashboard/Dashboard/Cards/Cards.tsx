import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { UserInfo as UserInfoType } from "types/pType";

export default function Cards() {
  const {userInfo} = useSelector((state:RootState)=>state.pDash);
  console.log(userInfo);
  
  return (
    <div className={styles.container}>
      <Card title={"Figure1"} figureResult={40.00} />
      <Card title={"Figure2"} figureResult={30.00} />
      <Card title={"Figure3"} figureResult={30.00} />
    </div>
  );
}

// function getFigureDiffer(arr:UserInfoType[]){
//   const array = arr.filter(value:UserInfoType => value.PROCESS_STATE === "완료됨");
//   const len = arr.length;
//   if(len === 1){
    
//   }
// }