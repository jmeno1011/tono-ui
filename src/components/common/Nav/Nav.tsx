import React from 'react'
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={styles.container}>
        <div className={styles.navHeader}>Nav</div>
        <hr />
        <div className={styles.navBox}>
            <div>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link to={"/"}>Home</Link></li>
                    <li className={styles.li}><Link to={"/about"}>About</Link></li>
                </ul>
                <hr className={styles.hr} />
                <h5 className={styles.h5}>PJ</h5>
                <ul className={styles.ulI}>
                    <li className={styles.li}><Link to={"/p-dashboard"}>P-Dashboard</Link></li>
                </ul>
                <hr className={styles.hr} />
                <h5 className={styles.h5}>UI</h5>
                <ul className={styles.ulI}>
                    <li className={styles.li}><Link to={"/react-table"}>Table</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
