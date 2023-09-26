import React from "react";
import styles from "./UserInfo.module.css";
import { UserInfo as UserInfoType } from "types/pType";

interface UserInfoProps {
  user: UserInfoType | null;
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoRow}>
          <div>
            <span>이름</span>
          </div>
          <div>
            {user?.NAME ? (
              <span className={styles.infoData}>{user.NAME}</span>
            ) : (
              <span>김토노</span>
            )}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div>
            <span>코드</span>
          </div>
          <div>
            {user?.CODE ? (
              <span className={styles.infoData}>{user.CODE}</span>
            ) : (
              <span>TONO01</span>
            )}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div>
            <span>이메일</span>
          </div>
          <div>
            {user?.EMAIL ? (
              <span className={styles.infoData}>{user.EMAIL}</span>
            ) : (
              <span>test@test.com</span>
            )}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div>
            <span>성별</span>
          </div>
          <div>
            {user?.SEX ? (
              <span className={styles.infoData}>{user.SEX}</span>
            ) : (
              <span>남성</span>
            )}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div>
            <span>나이</span>
          </div>
          <div>
            {user?.AGE ? (
              <span className={styles.infoData}>{user.AGE}</span>
            ) : (
              <span>30</span>
            )}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div>
            <span>최근 회차</span>
          </div>
          <div>
            {user?.ROUND ? (
              <span className={styles.infoData}>{user.ROUND}</span>
            ) : (
              <span>1</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
