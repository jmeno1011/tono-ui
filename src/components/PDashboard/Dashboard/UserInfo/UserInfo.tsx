import React from 'react'
import styles from "./UserInfo.module.css"

export default function UserInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoRow}>
          <div><span>이름</span></div>
          <div><span>홍길동</span></div>
        </div>
        <div className={styles.infoRow}>
          <div><span>코드</span></div>
          <div><span>TN0001</span></div>
        </div>
        <div className={styles.infoRow}>
          <div><span>최근 날짜</span></div>
          <div><span>2023년 09년 14일</span></div>
        </div>
        <div className={styles.infoRow}>
          <div><span>성별</span></div>
          <div><span>남성</span></div>
        </div>
        <div className={styles.infoRow}>
          <div><span>나이</span></div>
          <div><span>20</span></div>
        </div>
        <div className={styles.infoRow}>
          <div><span>최근 회차</span></div>
          <div><span>1</span></div>
        </div>
      </div>
    </div>
  )
}
