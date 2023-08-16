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
            </div>
        </div>
    </nav>
  )
}
